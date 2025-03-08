import { Link } from "react-router";
import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer";
import SearchPage from "./SearchPage";


const Home = () => {
  return (
    <div className="flex flex-col gap-y-12 justify-center items-center  bg-gray-100">
      <div className="flex justify-between mt-20 gap-x-16">
        <div className="flex flex-col gap-y-10 items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Book Review Platform</h1>
          <p className="text-lg text-gray-600 mb-6 text-center max-w-lg">
            Discover amazing books, read insightful reviews, and share your thoughts with a community of book lovers.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/books"
              className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Browse Books
            </Link>
            <Link
              to="/login"
              className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* search component */}
        <div className="ml-28">
          <SearchPage/>
        </div>
      </div>

      {/* review slider */}
      <div className="flex w-full ">
       <ReviewSlider/>
      </div>


      {/* footer */}
        <div className="flex w-full">
          <Footer/>
       </div>
    </div>
  );
};

export default Home;
