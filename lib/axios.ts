import axios from "axios";

let baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
let transactionBaseURL = process.env.NEXT_PUBLIC_TRANSACTION_BASE_URL;


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