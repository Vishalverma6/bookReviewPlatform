import toast from "react-hot-toast";
import { bookEndpoints } from "../api";
import { apiConnector } from "../apiConnector";


const {
    ADD_BOOK_API,
    GET_ALL_BOOK_API,
    GET_BOOK_API,
    SEARCH_BOOK_API,
} = bookEndpoints;


// add book 
export const addBook = async(data, token) => {
    let result =null;
    const toastId = toast.loading("Loading");
    try{
        const response = await apiConnector("POST",ADD_BOOK_API,data,{
            Authorization: `Bearer ${token}`,
        })

        console.log("ADD_BOOK_API API RESPONSE....",response)
        if(!response?.data?.success){
            throw new Error("Could not Add the book")
        }
        toast.success(response?.data?.message || "Book added Succesfully")
        result=response?.data?.data;
    }catch(error){
        console.log("ADD_BOOK_API API ERROR...",error);
        toast.error(error?.response?.data?.message)
    }
    toast.dismiss(toastId);
    return result
}

// get All book
export const getAllBook = async()=> {
    const toastId = toast.loading("Loading...")
    let result = [];
    try{
        const response = await apiConnector("GET",GET_ALL_BOOK_API,null
        )
        console.log("GET_ALL_BOOK_API API RESPONSE....",response);
        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not fetch all Book")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully fetched the books")
    }catch(error){
        console.log("GET_ALL_BOOK_API API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result;
}

// get book by Id 
export const getBook = async(bookId)=> {
    console.log("data", bookId);
    const toastId = toast.loading("Loading...")
    let result 
    try{
        const response = await apiConnector("GET",`${GET_BOOK_API}/${bookId}`)
        // console.log("data22", data);
        console.log("GET_BOOK_API API RESPONSE....",response);

        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not fetched book")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully fetched the book")
    }catch(error){
        console.log("GET_BOOK_API API ERROR .....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
}

// search book
export const getBookBySearch = async(search) => {
    const toastId = toast.loading("Loading...")
    let result =[];
    try{
        const response = await apiConnector("GET",`${SEARCH_BOOK_API}?search=${search}`);
        console.log("SEARCH_BOOK_API API RESPONSE....",response);

        if(!response.data.success){
            throw new Error (response?.data?.message || "Could not fetched book")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully fetched the book")

    }catch(error){
        console.log("SEARCH_BOOK_API API ERROR .....",error);
        toast.error(error.message);

    }
    toast.dismiss(toastId)
    return result

}