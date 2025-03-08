const BASE_URL = import.meta.env.VITE_BASE_URL

// Auth Endpoints 
export const authEndpoints ={
    SIGNUP_API :BASE_URL + "/auth/signup",
    LOGIN_API :BASE_URL + "/auth/login",
}

// User Endpoints 
export const userEndpoints ={
    GET_USER_PROFILE_API : BASE_URL+"/auth/userProfile",
    UPDATE_USER_PROFILE_API : BASE_URL+ "/auth/updateUserProfile",
};

// book endpoints 
export const bookEndpoints ={
    ADD_BOOK_API : BASE_URL + "/book/addBook",
    GET_ALL_BOOK_API: BASE_URL+ "/book/getAllBook",
    GET_BOOK_API : BASE_URL + "/book/getBook",
    SEARCH_BOOK_API: BASE_URL + "/book/searchBook",
}

// rating endpoints 
export const ratingEndpoints = {
    CREATE_REVIEW_API : BASE_URL +"/ratingAndReview/createReview",
    GET_REVIEW_API : BASE_URL + "/ratingAndReview/getReview",
    GET_ALL_REVIEW: BASE_URL + "/ratingAndReview/getAllReview",
}