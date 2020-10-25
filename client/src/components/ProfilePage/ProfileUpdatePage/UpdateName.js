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
    name: yup.string().min(3).required()
})

const UpdateNameSection = ({ name }) => {
    const { id } = useParams();
    const [text, setText] = useState("Update Name");

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(Schema),
        reValidateMode: 'onSubmit',
    });

    const token = getCookie("token");
    const onSubmit = async (formData) => {
        try {
            let response = await axios.put(`${process.env.REACT_APP_API}/user/update/name/${id}`, formData, {
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
    }

    return (
        <Form style={{ margin: '2rem'}} onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" name="name" placeholder={name} ref={register} />
            <FormButton type="submit">{text}</FormButton>
        </Form>
    )
}

export default UpdateNameSection;
