import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { isAuth, getCookie, signout } from "../../../actions/authHelpers";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.min.css';
import {
    Container,
    FormWrap,
    Icon,
    Form,
    FormContent,
    FormH1,
    FormImage,
    FormLabel,
    FormInput,
    FormButton
} from "../../AuthPage/AuthElements"

const Schema = yup.object().shape({
    name: yup.string().min(3),
    password: yup.string().min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Wait! Your Password doesn't match..."),
    bio: yup.string()
})


const ProfileUpdate = () => {
    const { id } = useParams();
    const [text, setText] = useState("Profile Update");
    const [values, setValues] = useState({
        role: "",
        name: "",
        bio: ""
    })

    const { role, name, email, bio } = values;
   
    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(Schema),
        reValidateMode: 'onSubmit',
      });

    const userID = isAuth()._id;
    const token = getCookie("token");
    const getProfile = async (id, token) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            const { role, name, bio } = response.data;

            setValues({
                role, name, bio
            });
        } catch (error) {
            signout(() => {
                console.log("Error Occurred... Please Login Again...")
            });    
        }
    }

    useEffect(() => {
        getProfile(userID, token);
    }, []);

    const onSubmit = async (formData) => {
        try {
            // Update
            let response = await axios.put(`${process.env.REACT_APP_API}/user/update/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            const { role, name, bio } = response.data;

            setValues({
                role, name, bio
            });
            
            if (response) {
                setText('Done');
                toast.info(`🦄 + ${response.data.message}`);
            }
        } catch(error) {
            toast.error(error.response.data.error);
        }
    } 

    return (
        <Container>
            <ToastContainer
              position="top-center"
              autoClose={10000}
              pauseOnFocusLoss
              pauseOnHover
              style={{ fontSize: '1.5rem' }}
            />
            <FormWrap>
                <Icon to="/">OSE</Icon>
                <FormContent>
                    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <FormH1>Profile Update</FormH1>

                        <FormImage />
                        <FormLabel>Name</FormLabel>
                        <FormInput
                            type="text"
                            name="name"
                            ref={register}
                            value={name}
                        />

                        <FormLabel>Password</FormLabel>
                        <FormInput 
                            type="password"
                            name="password"
                            ref={register}
                        />

                        <FormLabel>ConfirmPassword</FormLabel>
                        <FormInput 
                            type="password"
                            name="confirmPassword"
                            ref={register}
                        />

                        <FormLabel>Bio</FormLabel>
                        <FormInput
                           type="text"
                           name="bio"
                           ref={register}
                        />
                        
                        <FormButton type="submit">{text}</FormButton>
                    </Form>
                </FormContent>

            </FormWrap>
        </Container>
    )
}

export default ProfileUpdate;

{/* <Container>
    <ToastContainer
        position="top-center"
        autoClose={10000}
        pauseOnFocusLoss
        pauseOnHover
        style={{ fontSize: '1.5rem' }}
    />
    <FormWrap>
        <Icon to="/">OSE</Icon>
    </FormWrap>
</Container> */}