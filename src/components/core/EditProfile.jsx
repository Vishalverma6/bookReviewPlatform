import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/operations/userAPI";
import { useNavigate } from "react-router";

const EditProfile = ({ userData, setEditModal, fetchUserData }) => {
    const { token } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitProfileForm = async(data) => {
        try {
             await  updateUserProfile(data,token)
            setEditModal(false);
            fetchUserData();
        } catch (error) {
            console.log("ERROR MESSAGE: ", error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center     bg-opacity-100">
            <div className="bg-white  rounded-lg shadow-lg w-96 p-6 relative animate-fadeIn scale-95">
                {/* Close Button */}
                <button 
                    className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setEditModal(false)}
                >
                    ✖
                </button>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Edit Profile
                </h2>

                <form onSubmit={handleSubmit(submitProfileForm)} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter Your Full Name"
                            {...register("fullName", { required: true })}
                            defaultValue={userData?.fullName}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.fullName && <span className="text-red-500 text-xs">Please enter your full name</span>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter Your Email"
                            {...register("email", { required: true })}
                            defaultValue={userData?.email}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-xs">Please enter your email</span>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3">
                        {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={() => setEditModal(false)}
                            className="px-4 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        {/* Save Button */}
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
