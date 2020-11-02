import React, { Fragment, useState, useEffect } from 'react';
import { getCookie } from "../../../../actions/authHelpers";
import { TopicContainer, TopicTitleH1, TopicForm, TopicImageInput, TopicTitleInput, TopicSubmitBtn } from "./TopicCreateElements";
import Resizer from "react-image-file-resizer";
import { createTopic } from "../../../../actions/topic";
import QuillEditor from "../../../../helpers/QuillEditor";
import { ToastContainer, toast } from 'react-toastify';
import "react-quill/dist/quill.snow.css";
import 'react-toastify/dist/ReactToastify.min.css';

const TopicCreatePage = () => {
    const [state, setState] = useState({
        name: "",
        image: "",
        description: "",
        error: "",
        success: "",
      });

    const token = getCookie("token");
    const { name, image, description, error, success } = state;

    const handleChange = (name) => (e) => {
        setState({
          ...state,
          [name]: e.target.value,
          success: "",
          error: "",
        });
      };
    
      const handleImage = (e) => {
        let fileInput = false;
        if (e.target.files[0]) {
          fileInput = true;
        }
    
        if (fileInput) {
          Resizer.imageFileResizer(
            e.target.files[0],
            1000,
            1000,
            "PNG",
            100,
            0,
            (uri) => {
              // console.log(uri);
              setState({ ...state, image: uri, success: "", error: "" });
            },
            "base64"
          );
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let data = { name, description, image };
          const response = await createTopic(data, token);
          console.log("response", response);
          if(response.message) {
              setState({
                name: "",
                image: "",
                success: "Succssfully Created New Topic",
              });
      
              setTimeout(() => {
                window.location.reload();
              }, 1000);  
          } else if (response.error) {
            setState({ ...state, error: response.error })
          }
        } catch (error) {
          toast.error("Category Create Error", error);
        }
      };
    
    return (
        <Fragment>
            <TopicContainer>
                <ToastContainer
                position="top-center"
                autoClose={5000}
                pauseOnFocusLoss
                pauseOnHover
                style={{ fontSize: '1.5rem' }}
                />
                <TopicTitleH1>Create Topic</TopicTitleH1>
                <TopicForm onSubmit={handleSubmit}>
                    <img alt="Create Topic" src="https://i.gifer.com/TFQU.gif" />
                    <TopicImageInput 
                    type="file"
                    name="image"
                    onChange={handleImage}
                    accept="image/*"
                    required
                    />
                    <TopicTitleInput 
                    type="text"
                    name="name"
                    onChange={handleChange("name")}
                    placeholder="Topic Name"
                    />
                    <TopicTitleInput 
                    type="text"
                    name="description"
                    onChange={handleChange("description")}
                    placeholder="Topic Description"                    
                    />
                    <TopicSubmitBtn>Create Topic</TopicSubmitBtn>
                    {error && toast.error(error)}
                    {success && toast.info(success)}
                </TopicForm>
            </TopicContainer>
        </Fragment>
    )
}

export default TopicCreatePage;