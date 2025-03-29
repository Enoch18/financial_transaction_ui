import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const transactionBaseURL = process.env.NEXT_PUBLIC_TRANSACTION_BASE_URL;


const axiosInstance = axios.create({
    baseURL: baseURL
});


const axiosTransactionInstance = axios.create({
    baseURL: transactionBaseURL
});

export {
    baseURL,
    transactionBaseURL,
    axiosInstance,
    axiosTransactionInstance
};