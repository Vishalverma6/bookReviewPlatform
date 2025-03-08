import React, { useState } from "react";
import { getBookBySearch } from "../services/operations/bookAPI";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const SearchPage = () => {
  const [searchBook, setSearchBook] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchSubmitForm = async (data) => {
    const { search } = data;
    if (!search.trim()) {
      toast.error("Please enter a valid search term!");
      return;
    }

    const result = await getBookBySearch(search);
    setSearchBook(result);
    console.log("Search Result:", result);
  };

  const searchHandler = (bookId)=> {
    navigate(`/book/${bookId}`)
  }

  return (
    <div className="flex flex-col bg-gray-100 p-6 min-h-screen items-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Search for Books</h2>

        {/* Search Form */}
        <form onSubmit={handleSubmit(searchSubmitForm)} className="flex flex-col space-y-4">
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search by title or author..."
              {...register("search", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" size={20} />
            {errors.search && (
              <span className="text-red-500 text-sm mt-1 block">Please enter a search term</span>
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md"
          >
            Search
          </button>
        </form>

        {/* Search Results */}
        {searchBook.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Results:</h3>
            <ul className="mt-2 space-y-4">
              {searchBook.map((book, index) => (
                <li key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <h4 className="text-md font-medium text-gray-800">{book.title}</h4>
                  <p className="text-sm text-gray-600">By {book.author}</p>

                  {/* Read More Button */}
                  <button
                    onClick={()=> searchHandler(book?._id)}
                    className="mt-3 w-full cursor-pointer py-2 text-white font-semibold text-sm rounded-lg
                      bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600
                      transition-transform transform hover:scale-105 shadow-md"
                  >
                    Read More
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
