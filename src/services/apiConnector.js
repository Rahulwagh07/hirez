import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    console.log('Request URL:', url);
    console.log('Request Headers:', headers);
    console.log('Request Params:', params);
    console.log('Request Body:', bodyData);
    return axiosInstance({
        method: `${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers : headers ? headers : null,
        params : params ? params : null,
    });
}