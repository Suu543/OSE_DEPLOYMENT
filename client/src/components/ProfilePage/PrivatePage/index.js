import React, { useState, useEffect } from "react";
import { isAuth, getCookie } from "../../../actions/authHelpers";
import axios from "axios";
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
    LinkBtn
} from "../../AuthPage/AuthElements"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


const PrivatePage = () => {

    const [values, setValues] = useState({
        role: "",
        name: "",
        email: "",
    })

    const { role, name, email } = values;

    const userID = isAuth()._id;
    const token = getCookie("token");
    const getProfile = async (id, token) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const { role, name, email} = response.data;

            setValues({
                role, name, email
            });
        } catch (error) {
            toast.error("Error Occurred...")
        }
    }

    useEffect(() => {
        getProfile(userID, token);
    }, []);
    
    return (
        <Container>
            <ToastContainer />
            <FormWrap>
                <Icon to="/">OSE</Icon>
                <FormContent>
                    <Form>
                        <FormH1>About You</FormH1>

                        <FormImage />
                        <FormLabel>Role</FormLabel>
                        <FormInput 
                            value={role}
                        />

                        <FormLabel>Name</FormLabel>
                        <FormInput 
                            value={name}
                        />

                        <FormLabel>Email</FormLabel>
                        <FormInput 
                            value={email}
                        />  

                        <FormLabel>Bio</FormLabel>
                        <FormInput />
                        
                        <LinkBtn to={`/private/update/${userID}`}>Update Profile</LinkBtn>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
};

export default PrivatePage;