import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCookie } from "../../../../actions/authHelpers";
import { getTopics, deleteTopic } from '../../../../actions/topic';
import { TopicReadContainer, TopicInfoContainer, TopicInfoH1, TopicReadWrapper,  TopicTable, TopicTableHeader, TopicTableH1, TopicTableRow, TopicTableRowData, TopicTableButton } from "./TopicReadElements";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const TopicReadPage = () => {
    const [topics, setTopics] = useState([]);
    const token = getCookie("token");
    
    const loadTopics = async () => {
        try {
          let response = await getTopics();
          setTopics([...topics, ...response]);
        } catch (error) {
          console.log('Error', error);
        }
      };
    
    const deleteTopicAndUpdateTopic = async (slug, token) => {
        const response = await deleteTopic(slug, token);
        toast.info(`🦄 ${response.message} `);

        const updatedTopics = await getTopics();
        setTopics([...updatedTopics]);
    }


    useEffect(() => {
        loadTopics();
    }, [])

    return (
        <Fragment>
            <TopicReadContainer>
                <ToastContainer
                position="top-center"
                autoClose={3000}
                pauseOnFocusLoss
                pauseOnHover
                style={{ fontSize: '1.5rem' }}
                />
                <TopicInfoContainer>
                    <TopicInfoH1>Admin Topics</TopicInfoH1>
                </TopicInfoContainer>
                <TopicReadWrapper>
                        <TopicTableH1>
                            <Link to="/admin/topic/create">Create Topic</Link>
                        </TopicTableH1>
                    <TopicTable>
                        <TopicTableRow>
                            <TopicTableHeader>Name</TopicTableHeader>
                            <TopicTableHeader>Description</TopicTableHeader>
                            <TopicTableHeader>Update</TopicTableHeader>
                            <TopicTableHeader>Delete</TopicTableHeader>
                        </TopicTableRow>
                        {
                            topics && topics.map((t, i) => (
                            <TopicTableRow key={i}>
                                <TopicTableRowData>{t.name}</TopicTableRowData>
                                <TopicTableRowData>{t.description}</TopicTableRowData>
                                <TopicTableRowData>
                                    <TopicTableButton style={{ background: "#D1ECF1", color: "#487AB0" }}>Update</TopicTableButton>
                                </TopicTableRowData>
                                <TopicTableRowData>
                                    <TopicTableButton onClick={() => deleteTopicAndUpdateTopic(t.slug, token)} style={{ background: "#F8D7DA", color: "#B67B81" }}>Delete</TopicTableButton>
                                </TopicTableRowData>
                            </TopicTableRow>    
                            ))
                        }
                    </TopicTable>
                </TopicReadWrapper>
            </TopicReadContainer>
        </Fragment>
    )
}

export default TopicReadPage;