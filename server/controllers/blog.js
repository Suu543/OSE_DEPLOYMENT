const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const fileType = require('file-type');
const { v4: uuidv4 } = require('uuid');
const formidable = require('formidable');
const slugify = require('slug');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

dotenv.config();

// const { smartTrim } = require('../helpers/smartTrim');
const { Blog } = require('../models/Blog');
const { Tag } = require('../models/Tag');
const { Topic } = require('../models/Topic');
const { Reference } = require('../models/Reference');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});


exports.createBlog = async (req, res) => {
  // 태그 입력 방식 때문에 요청을 모아서 한 번에 처리
  const saveMultiTags = async (tags) => {
    const jobQuerys = [];
    const arrTagId = [];
    const splitedTags = tags.split(',');
    const allTags = await Tag.find({});

    // 요청으로 들어온 태그 중 이미 생성된 태그와 그렇지 않을 태그를 구분 arrTagId에 이미 생성된 태그를 담고, splitedTags 에서 이미 생성된 태그를 제거
    allTags.forEach((tagFromDB) => {
      if (splitedTags.find((tag) => tagFromDB.name == tag)) {
        arrTagId.push(tagFromDB._id);
        const idx = splitedTags.indexOf(tagFromDB.name);
        splitedTags.splice(idx, 1);
      }
    });

    // 위 로직에서 이미 생성된 태그는 splitedTags 배열에서 다 제거 되었기 때문에 splitedTags 배열에 있는 태그를 생성하도록 job Query에 요청 할당
    splitedTags.forEach((name) => {
      const slug = slugify(name).toLowerCase();
      const newTag = new Tag({ name, slug });
      jobQuerys.push(newTag.save());
    });

    // jobQuerys 배열에 담은 비동기 요청을 한 번에 처리
    const tagResult = await Promise.all(jobQuerys);

    // 새로 생성된 태그를 arrTagId에 담아 모든 생성된 태그를 확인차 리턴
    tagResult.forEach((tag) => {
      arrTagId.push(tag._id);
    });

    return arrTagId;
  };

  const saveMultiReferences = (references) => {
    const results = [];

    references.forEach((ref) => {
      if (ref.url.length > 0 && ref.key.length > 0) {
        results.push(ref);
      }
    });

    return results;
  };

  const uniqueRefs = (arr) => {
    const filteredArr = arr.reduce((acc, current) => {
      const dup_checker = acc.find((item) => item.url == current.url);
      if (dup_checker) {
        return acc.concat([current]);
      }
      return acc;
    }, []);

    return filteredArr;
  };

  try {
    const blog = new Blog();
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.multiples = true;
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      console.log('First');
      const {
        title,
        excerpt,
        body,
        topics,
        mime,
        image,
        references,
        tags,
      } = fields;

      // Validation 처리는 Client 단에서
      //   if (!title || title.length < 2) {
      //     return res.json({
      //       error: 'Please Enter At Least One Characters...',
      //     });
      //   }

      //   if (!excerpt || excerpt < 10) {
      //     return res.json({
      //       error: 'Please Enter At Least Ten Characters...',
      //     });
      //   }

      //   if (!body || body.length < 1) {
      //     console.log('body error');
      //     return res.json({
      //       error: 'Please Enter At Least One Character...',
      //     });
      //   }

      //   if (!topics || topics.length === 0) {
      //     return res.json({
      //       error: 'Please Pick At Least One Topic...',
      //     });
      //   }

      //   if (!tags || tags.length === 0) {
      //     return res.json({
      //       error: 'Please Pick At Least One Tag...',
      //     });
      //   }

      //   if (!image || image.length < 1) {
      //     return res.json({
      //       error: 'Please Select Main image For this Work...',
      //     });
      //   }

      let imageData = image;
      if (image.substr(0, 7) === 'base64,') {
        imageData = image.substr(7, image.length);
      }

      const buffer = Buffer.from(imageData, 'base64');
      const fileInfo = await fileType.fromBuffer(buffer);
      const detectedExt = fileInfo.ext;
      const detectedMime = fileInfo.mime;

      if (detectedMime !== mime)
        return res.json({
          message: "mime types don't match`",
        });

      const keyName = uuidv4();
      const key = `ose/${keyName}.${detectedExt}`;

      const params = {
        Bucket: 'ose',
        Key: key,
        Body: buffer,
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentType: mime,
      };

      const blogTags = await saveMultiTags(tags);
      const blogRefs = saveMultiReferences(uniqueRefs(JSON.parse(references)));

      s3.putObject(params, async (err, data) => {
        if (err) {
          console.log('Second');
          return res.status(400).json({ error: 'Upload to S3 Failed...' });
        }

        console.log('Third');

        const url = `https://ose.s3-${process.env.AWS_REGION}.amazonaws.com/${key}`;

        blog.image.url = url;
        blog.image.key = key;

        blog.title = title;
        blog.slug = slugify(title).toLowerCase();
        blog.body = body;
        // blog.excerpt = smartTrim(excerpt, 150, " ", "...");
        blog.excerpt = excerpt;
        blog.topics = topics && topics.split(',');
        blog.tags = tags && blogTags;
        blog.references = blogRefs;

        try {
          const newBlog = await blog.save();
          return res.status(200).json(newBlog);
        } catch (error) {
          console.log('Fourth');
          return res.status(400).json({ error });
        }
      });
    });
  } catch (error) {
    console.log('Fifth', error);
    return res.status(400).json({
      message: error.message || 'Failed to upload image...',
    });
  }
};

exports.readBlog = async (req, res) => {
  const { slug } = req.params;

  try {
    const blog = await Blog.findOne({ slug })
      .populate('topics', 'name slug')
      .populate('tags', 'name');
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.uploadS3 = multer({
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: 'ose',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      const keyName = uuidv4();
      const extension = path.extname(file.originalname);
      cb(null, `ose/blogBody/${keyName}${extension}`);
    },
  }),
});

exports.upload = async (req, res) => {
  const ref = new Reference();
  console.log('req.file.key', req.file);
  ref.url = req.file.location;
  ref.key = req.file.key;
  const result = await ref.save();
  return res.json({
    location: req.file.location,
    key: req.file.key,
    id: result._id,
  });
};

exports.removeBlog = async (req, res) => {
  const { slug } = req.params;

  const deleteimage = async (key) => {
    const deletedParams = {
      Bucket: 'ose',
      Key: `${key}`,
    };

    s3.deleteObject(deletedParams, (err, data) => {
      if (err) console.log('S3 DELETE ERROR DURING...', err);
      else console.log('S3 DELETED DURING', data);
    });
  };

  try {
    const removedBlog = await Blog.findOneAndRemove({ slug });
    const removedReferences = removedBlog.references;
    const removedimage = removedBlog.image.key;

    await deleteimage(removedimage);

    removedReferences.map(async (ref) => {
      const deletedRef = await Reference.findByIdAndDelete({ _id: ref });

      if (deletedRef) {
        const deletedParams = {
          Bucket: 'ose',
          Key: `${deletedRef.key}`,
        };

        s3.deleteObject(deletedParams, (err, data) => {
          if (err) console.log('S3 DELETE ERROR DURING', err);
          else console.log('S3 DELETED DURING', data);
        });
      }
    });

    return res.status(200).json(removedBlog);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.findByTopic = async (req, res) => {
  const slug = req.params.topic;

  try {
    const refTopic = await Topic.findOne({ slug });
    console.log('refTopic', refTopic);
    const blogs = await Blog.find({ topics: { $in: refTopic._id } })
      .populate('topics', 'name')
      .populate('tags', 'name');

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.readAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({}).populate('topics', 'name slug').populate('tags', 'name');
    return res.status(200).json(allBlogs);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
