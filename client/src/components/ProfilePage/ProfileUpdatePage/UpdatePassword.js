import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getCookie } from "../../../actions/authHelpers";
import { toast } from "react-toastify";
import { Form, FormLabel, FormInput, FormButton } from "../../AuthPage/AuthElements"

const Schema = yup.object().shape({
    password: yup.string().min(6),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Wait! Your Password doesn't match..."),
})

const UpdatePasswordSection = () => {
    const { id } = useParams();
    const [text, setText] = useState("Update Password");

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(Schema),
        reValidateMode: 'onSubmit',
    });

    const token = getCookie("token");
    const onSubmit = async (formData) => {
        try {
            let response = await axios.put(`${process.env.REACT_APP_API}/user/update/password/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response) {
                setText('Done');
                toast.info(`🦄 + ${response.data.message}`);
            }
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    return (
        <Form style={{ margin: '2rem'}} onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" name="password" ref={register} />
            <FormLabel>ConfirmPassword</FormLabel>
            <FormInput type="password" name="confirmPassword" ref={register} />
            <FormButton type="submit">{text}</FormButton>
        </Form>
    )
}

export default UpdatePasswordSection;
