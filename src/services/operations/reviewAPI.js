import toast from "react-hot-toast";
import { ratingEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { data } from "react-router";


const {
    GET_ALL_REVIEW,
    GET_REVIEW_API,
    CREATE_REVIEW_API
}= ratingEndpoints;


// create review 
export const createReview = async(data,token)=> {
    const toastId = toast.loading("Loading...")
    let result = null ;
    try{
        const response = await apiConnector("POST",CREATE_REVIEW_API,data, {
             Authorization:`Bearer ${token}`
        });
        console.log("CREATE_REVIEW_API API RESPONSE....",response);
        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not create review")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully create the Review")
    }catch(error){
        console.log("CREATE_REVIEW_API API ERROR .....",error);
        // toast.error(error.message);
        toast.error(error.response.data.message)
    }
    toast.dismiss(toastId)
    return result
}

// get review 
export const getReview = async(data)=> {
    const toastId = toast.loading("Loading...")
    let result = [] ;
    try{
        const response = await apiConnector("GET",GET_REVIEW_API,data);
        console.log("GET_REVIEW_API API RESPONSE....",response);
        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not fetched review")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully fetched the Review")
    }catch(error){
        console.log("GET_REVIEW_API API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
};

// get All review 
export const getAllReview = async()=> {
    const toastId = toast.loading("Loading...")
    let result = [] ;
    try{
        const response = await apiConnector("GET",GET_ALL_REVIEW);
        console.log("GET_ALL_REVIEW API RESPONSE....",response);
        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not fetched all review")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully fetched all the Review")
    }catch(error){
        console.log("GET_ALL_REVIEW API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
}

