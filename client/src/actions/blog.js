import axios from 'axios';

export const readBlogsByTopic = async (topic) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/blogs/${topic}`,
    );
    return response.data;
  } catch (error) {
    console.log('error');
    return error;
  }
};

export const readAllBlogs = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/blogs`
    )

    return response.data;
  } catch(error) {
    console.log('error');
    return error;
  }
}

export const createBlog = async (formData, token) => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_API}/api/blog`,
      formData,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log('error');
    return error;
  }
};

export const readBlog = async (slug) => {
  try {
    let response = await axios.get(`${process.env.REACT_APP_API}/api/blog/${slug}`);
    return response.data;
  } catch (error) {
    console.log('error');
    return error;
  }
};

export const imageUpload = (formData) => {
  const response = axios.post(
    `${process.env.REACT_APP_API}/api/blog/upload`,
    formData,
  );
  return response;
};

export const deleteBlog = async (slug, token) => {
  const Checker = window.confirm(`정말 ${slug} 글을 삭제하기를 원하십니까?`);
  if(Checker) {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/blog/${slug}`,
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      );

      return response.data;
    } catch (error) {
      return error
    }
  } else {
    return;
  }
}
