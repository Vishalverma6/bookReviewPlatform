import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBook } from "../../services/operations/bookAPI";
import RatingAndReview from "./RatingAndReview";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";



const BookDetails = () => {
  const { bookId } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const [reviewModal, setReviewModal] = useState(false);
  const {token}= useSelector((state)=> state.auth)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBook(bookId);
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [bookId]);

  const clickHandler =async()=> {
    if(!token){
        toast.error("Please login first to Review ")
    }
    else{
        setReviewModal(true);
    }

  }

  if (!book) return <p className="text-center text-gray-600">Loading book details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Book Cover & Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img 
            src="/book-cover-placeholder.jpg" // Replace with book cover URL if available
            alt={book.title}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <h2 className="text-lg text-gray-700 mt-2">by {book.author}</h2>
          <p className="text-gray-600 mt-4">{book.description}</p>
        </div>

        <div>
            <button 
             onClick={()=> clickHandler()}
            className="px-6 py-2 rounded-md cursor-pointer bg-yellow-300 text-black font-bold  transition-transform transform hover:scale-105">
            Add Review
            </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Reviews</h3>
        {book.ratingAndReviews.length > 0 ? (
          book.ratingAndReviews.map((review) => (
            <div key={review._id} className="mt-4 p-4 border rounded-md">
              <p className="text-yellow-500">⭐ {review.rating} / 5</p>
              <p className="text-gray-800 font-semibold">{review.review}</p>
              <p className="text-gray-500 text-sm">Reviewed by User: {review.user}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>


      {/* review Modal */}
      {
        reviewModal && (
            <RatingAndReview book={book} setReviewModal={setReviewModal}/>
        )

      }
    </div>
  );
};

export default BookDetails;
