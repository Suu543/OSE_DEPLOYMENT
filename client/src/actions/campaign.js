import axios from "axios";

export const getCampaigns = async () => {
    try {
       const response = await axios.get(`${process.env.REACT_APP_API}/campaigns`);
       return response.data;
    } catch (error) {
        return error;
    }
}