import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { isAuth, getCookie, signout } from "../../../actions/authHelpers";
import { useForm } from 'react-hook-form';
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.min.css';
import {
    FormWrap,
    Icon,
    FormContent,
} from "../../AuthPage/AuthElements"
import UpdateNameSection from "./UpdateName";
import UpdateBioSection from "./UpdateBio"
import UpdatePasswordSection from "./UpdatePassword";

const Schema = yup.object().shape({
    name: yup.string().min(3),
    password: yup.string().min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Wait! Your Password doesn't match..."),
    bio: yup.string()
})

const Container = styled.div`
  min-height: 692px;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`

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

    return (
        <Container>
            <ToastContainer
              position="top-center"
              autoClose={10000}
              pauseOnFocusLoss
              pauseOnHover
              style={{ fontSize: '1.5rem' }}
            />
            <Icon to="/">OSE</Icon>
            <FormWrap>
                <FormContent>
                    <UpdateNameSection name={name} />
                    <UpdateBioSection bio={bio} />
                    <UpdatePasswordSection />
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default ProfileUpdate;

