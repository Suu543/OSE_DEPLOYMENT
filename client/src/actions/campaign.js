import axios from "axios";

export const getCampaigns = async () => {
    try {
       const response = await axios.get(`${process.env.REACT_APP_API}/campaigns`);
       return response.data;
    } catch (error) {
        return error;
    }
}

export const deleteCampaign = async (title, token) => {
    const Checker = window.confirm(`${title} 캠페인을 삭제하기를 원하십니까?`);
    if (Checker) {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_API}/campaign/${title}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            )

            return response.data;
        } catch (error) {
            return error;
        }
    }    
}