import toast from "react-hot-toast";
import { userEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { data } from "react-router";


const {
    GET_USER_PROFILE_API,
    UPDATE_USER_PROFILE_API,
}= userEndpoints;

export const getUserProfile = async(token)=> {
    const toastId = toast.loading("Loading...")
    let result ;
    try{
        const response = await apiConnector("GET",GET_USER_PROFILE_API,null, {
            Authorization:`Bearer ${token}`
        })

        console.log("GET_USER_PROFILE_API API RESPONSE....",response);
        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not fetched User Profile")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully fetched the User Profile")
    }catch(error){
        console.log("GET_USER_PROFILE_API API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
}

// update User Profile 
export const updateUserProfile = async(data, token)=> {
    const toastId = toast.loading("Loading...")
    try{
        const response = await apiConnector("PUT",UPDATE_USER_PROFILE_API,data, {
            Authorization:`Bearer ${token}`
        })

        console.log("UPDATE_USER_PROFILE_API API RESPONSE....",response);
        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not Update User Profile")
        }
        
        toast.success(response?.data?.message || "Successfully update the User Profile")
    }catch(error){
        console.log("UPDATE_USER_PROFILE_API API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
}