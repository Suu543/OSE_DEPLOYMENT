import axios from 'axios';

export const getTopics = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/topics`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const readTopic = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/topic/${slug}`,
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteTopic = async (slug, token) => {
  const Checker = window.confirm(`Do you really want to delete ${slug} topic? It will delete all the blogs related to this topics... Please Be careful of deleting topics...`);
  console.log("token", token);
  if(Checker) {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/topic/${slug}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
  
      return response.data;
    } catch(error) {
        return error;
    }  
  } else {
    return;
  }
}

export const createTopic = async (data, token) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/topic`,
      data,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
}