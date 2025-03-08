import React, { useEffect, useState } from 'react';
import { getAllReview } from '../../services/operations/reviewAPI';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import toast from 'react-hot-toast';

const ReviewSlider = () => {
  const [bookReviews, setBookReviews] = useState([]);

  const getReview = async () => {
    try {
      const result = await getAllReview();
      setBookReviews(result);
    } catch (error) {
      toast.error('Could not fetch the reviews');
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="w-full p-4">
      <Swiper
        spaceBetween={24}
        loop={true}
        freeMode={true}
        navigation={true}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {bookReviews.length > 0 ? (
          bookReviews.map((review) => (
            <SwiperSlide key={review._id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{review.book.title}</h3>
              <p className="text-sm text-gray-600">by {review.book.author}</p>
              <p className="mt-2 text-gray-800">"{review.review}"</p>
              <p className="mt-1 text-yellow-500">Rating: {review.rating} ⭐</p>
              <p className="mt-2 text-gray-500 text-sm">- {review?.user?.fullName}</p>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews available</p>
        )}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
