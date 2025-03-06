import { Link } from "react-router";


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Book Review Platform</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-lg">
        Discover amazing books, read insightful reviews, and share your thoughts with a community of book lovers.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/books"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Browse Books
        </Link>
        <Link
          to="/login"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
