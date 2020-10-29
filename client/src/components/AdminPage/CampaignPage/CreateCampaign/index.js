import React, { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { 
    CampaignContainer, 
    CampaignH1,
    CampaignNavbarWrapper, 
    CampaignNavbarIcon, 
    CampaignRenderWrapper, 
    CampaignRenderContentWrapper, 
    CampaignRenderImageWrapper, 
    CampaignRenderTitleWrapper, 
    CampaignRenderInfoWrapper,
    CampaignSidebarWrapper,
    CampaignLabel,
    CampaignInput,
    CampaignImageInput,
    CampaignImage,
    CampaignTitle,
    CampaignDescription,
    CampaignButtonText,
    CampaignAmount,
    CampaignDate,
    CampaignLink
} from "./CampaignCreateElements";
import { FaBars, FaTimes, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const CampaignCreatePage = () => {
    const [selectedFile, setSelectedFile] = useState() 
    const [preview, setPreview] = useState();
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        image: "",
        title: "",
        description: "",
        buttonText: "",
        amount: 0,
        link: "",
        startDate: "",
        endDate: "",
    })

    const { image, link, title, description, buttonText, amount, startDate, endDate } = state;

    useEffect(() => {
        if(!image) {
            setPreview("https://www.sabre-roads.org.uk/wiki/images/3/3d/Photo-required.png");
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [state])



    const openToggle = () => {
        setOpen(!open);
    }

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0 ) {
            setState({...state, image: "https://www.sabre-roads.org.uk/wiki/images/3/3d/Photo-required.png"});
            return
        }

        Resizer.imageFileResizer(
            e.target.files[0],
            1000,
            1000,
            "PNG",
            100,
            0,
            (uri) => {
                setState({...state, image: uri})
            },
            "base64"
        )

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const handleChange = (name) => (e) => {
        setState({
            ...state,
            [name]: e.target.value
        });
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const startD = new Date(startDate).getTime();
        const endD = new Date(endDate).getTime();

        if (startD < endD) {
            console.log("state", state);
            const response = await axios.post(`${process.env.REACT_APP_API}/campaign`, state);
            toast.info(`🦄 ${response.data.message}`);
            setTimeout(() => {
                window.location.reload(false);
            }, 2000)            
        } else {
            alert("StartDate cannot exceed the endDate")
        }        
    }
    
    return (
        <CampaignContainer>
            <CampaignNavbarWrapper>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                pauseOnFocusLoss
                pauseOnHover
                style={{ fontSize: '1.5rem' }}
            />
                <CampaignNavbarIcon onClick={openToggle}>
                    { open && <FaBars /> }  
                    { !open && <FaTimes />}
                    <h1><Link to="/">OSE</Link></h1>
                </CampaignNavbarIcon>
            </CampaignNavbarWrapper>
            <CampaignRenderWrapper>
                <CampaignH1>Create Campaign</CampaignH1>
                <CampaignRenderContentWrapper>
                    <CampaignRenderImageWrapper imgUrl={`${preview}`} />
                    <CampaignRenderTitleWrapper>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </CampaignRenderTitleWrapper>
                    <CampaignRenderInfoWrapper>
                      <h1>Goal: &nbsp; KOR₩ {amount}</h1>

                      <h3>Start Date: &nbsp; {startDate}</h3>
                      <h3>End Date: &nbsp; {endDate}</h3>
                      <h3>Detail: <Link to={`${link}`}>Show Details <FaAngleDoubleRight /></Link></h3>

                      <button>{buttonText}</button>
                    </CampaignRenderInfoWrapper>
                </CampaignRenderContentWrapper>
            </CampaignRenderWrapper>
            <CampaignSidebarWrapper open={open} onSubmit={handleSubmit}>
                    <CampaignImage>
                        <CampaignLabel>Image</CampaignLabel>
                        <CampaignImageInput 
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={onSelectFile}
                            required
                        />
                    </CampaignImage>
                    <CampaignTitle>
                        <CampaignLabel>Title</CampaignLabel>
                        <CampaignInput 
                            type="text"
                            name="title"
                            onChange={handleChange("title")}
                            placeholder="Campaign Title"
                            required
                        />
                    </CampaignTitle>
                    <CampaignDescription>
                        <CampaignLabel>Description</CampaignLabel>
                        <CampaignInput 
                            type="text"
                            name="description"
                            onChange={handleChange("description")}
                            placeholder="Campaign Description"
                            required
                        />
                    </CampaignDescription>
                    <CampaignButtonText>
                        <CampaignLabel>Button Text</CampaignLabel>
                        <CampaignInput 
                            type="text"
                            name="buttonText"
                            onChange={handleChange("buttonText")}
                            placeholder="Campaign Button Text"
                            required
                        />
                    </CampaignButtonText>
                    <CampaignAmount>
                        <CampaignLabel>Amount</CampaignLabel>
                        <CampaignInput 
                           type="number"
                           name="amount"
                           onChange={handleChange("amount")}
                           placeholder="Campaign Amount"
                           required
                        />
                    </CampaignAmount>
                    <CampaignLink>
                        <CampaignLabel>Link</CampaignLabel>
                        <CampaignInput 
                           type="text"
                           name="link"
                           onChange={handleChange("link")}
                           placeholder="Campaign Link"
                           required
                        />
                    </CampaignLink>
                    <CampaignDate>
                        <CampaignLabel>Start Date</CampaignLabel>
                        <CampaignInput 
                            type="date"
                            name="startDate"
                            onChange={handleChange("startDate")}
                            required
                        />
                        <br />
                        <CampaignLabel>End Date</CampaignLabel>
                        <CampaignInput 
                            type="date"
                            name="endDate"
                            onChange={handleChange("endDate")}
                            required
                        />
                    </CampaignDate>
                    <CampaignInput type="submit" />
                </CampaignSidebarWrapper>
        </CampaignContainer>
    )
}

export default CampaignCreatePage;