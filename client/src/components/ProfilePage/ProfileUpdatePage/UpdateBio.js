import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getCookie, signout } from "../../../actions/authHelpers";
import { toast } from "react-toastify";
import { Form, FormLabel, FormInput, FormButton } from "../../AuthPage/AuthElements"

const Schema = yup.object().shape({
    bio: yup.string().min(3).required()
})

const UpdateBioSection = ({ bio }) => {
    const { id } = useParams();
    const [text, setText] = useState("Update Bio");

    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(Schema),
        reValidateMode: 'onSubmit',
    });

    const token = getCookie("token");
    const onSubmit = async (formData) => {
        try {
            let response = await axios.put(`${process.env.REACT_APP_API}/api/user/update/bio/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response) {
                setText('Done');
                toast.info(`🦄 + ${response.data.message}`);
                setTimeout(() => {
                    window.location.reload(false);
                }, 2000);
            }
        } catch (error) {
            // 
            toast.error(error.response.data.error);
        }
    }

    return (
        <Form style={{ margin: '2rem'}} onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Bio</FormLabel>
            <FormInput type="text" name="bio" placeholder={bio} ref={register} />
            <FormButton type="submit">{text}</FormButton>
        </Form>
    )

}

export default UpdateBioSection;
