import Axios from "axios";

const baseURL = "https://my-json-server.typicode.com/";

const AxiosCall = async (requestObj) => {
  const { path, method, data } = requestObj;

  const headers = {
    "Content-Type": "application/json",
  };

  const url = `${baseURL}${path}`;
  try {
    const response = await Axios({
      method,
      url,
      data,
      headers,
      json: true,
    });
    const result = response && response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default AxiosCall;
