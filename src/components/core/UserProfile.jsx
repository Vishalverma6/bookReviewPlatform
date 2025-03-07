import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserProfile } from "../../services/operations/userAPI";
import EditProfile from "./EditProfile";

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const { token } = useSelector((state) => state.auth);
    const [editModal, setEditModal] = useState(false);


    const fetchUserData = async () => {
        const result = await getUserProfile(token);
        setUserData(result);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const clickHandler = () => {
        setEditModal(true);
    }

    return (
        <div className="flex justify-center items-center mt-20 bg-gray-100 ">
            {userData && (
                <div className="bg-white shadow-lg rounded-lg p-6 w-80">
                    <div className="flex flex-col items-center">
                        <button 
                         onClick={()=> clickHandler()}
                        className="mb-3 cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                            Edit Profile
                        </button>
                        <div className="w-20 h-20 bg-blue-500 text-white flex justify-center items-center text-xl font-bold rounded-full">
                            {userData.fullName.charAt(0).toUpperCase()}
                        </div>
                        <h2 className="text-xl font-semibold mt-3">{userData.fullName}</h2>
                        <p className="text-gray-600">{userData.email}</p>
                        <span className="mt-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                            {userData.role}
                        </span>
                    </div>

                    {
                        editModal && (
                            <EditProfile setEditModal={setEditModal} userData= {userData} fetchUserData={fetchUserData}/>
                        )
                    }
                </div>
            )}


        </div>
    );
};

export default UserProfile;
