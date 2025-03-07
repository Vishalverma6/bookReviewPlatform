import React from 'react';
import { useForm } from 'react-hook-form';
import { createReview } from '../../services/operations/reviewAPI';
import { useSelector } from 'react-redux';

const RatingAndReview = ({ book, setReviewModal }) => {
    const { token } = useSelector((state) => state.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitReviewForm = async (data) => {
        await createReview(
            {
                bookId: book?._id,
                rating: data?.rating,
                review: data?.review,
            },
            token
        );
        setReviewModal(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
            <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative animate-fadeIn scale-95">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
                    onClick={() => setReviewModal(false)}
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    Rate & Review 📖
                </h2>

                <form onSubmit={handleSubmit(submitReviewForm)} className="space-y-4">
                    {/* Rating Input */}
                    <div>
                        <label htmlFor="rating" className="text-sm font-medium text-gray-700">
                            Rate the book (1-5) ⭐
                        </label>
                        <input
                            type="number"
                            id="rating"
                            placeholder="Enter rating (1-5)"
                            {...register("rating", { required: true, min: 1, max: 5 })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.rating && (
                            <span className="text-red-500 text-xs">Please enter a rating between 1 and 5</span>
                        )}
                    </div>

                    {/* Review Textarea */}
                    <div>
                        <label htmlFor="review" className="text-sm font-medium text-gray-700">
                            Share your experience ✍️
                        </label>
                        <textarea
                            id="review"
                            placeholder="Write your review..."
                            {...register("review", { required: true })}
                            className="w-full h-24 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.review && (
                            <span className="text-red-500 text-xs">Please share your thoughts about the book</span>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3">
                        {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={() => setReviewModal(false)}
                            className="px-4 py-2 border border-gray-400 text-gray-600 rounded-md hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        {/* Save Button */}
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-md shadow-md hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105"
                        >
                            Submit Review 🚀
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RatingAndReview;
