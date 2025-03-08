import React, { useEffect, useState } from 'react'
import { getAllBook, getBook } from '../../services/operations/bookAPI';
import { Link, useNavigate } from 'react-router';
import Footer from '../common/Footer';

const Book = () => {
    const [bookData, setBookData] = useState([]);
    const navigate=  useNavigate();

    const getBookDetails = async()=> {

        const result = await getAllBook();
        // console.log("result",result);
        setBookData(result)

    
    }

    const clickHandler =async(bookId) => {
        // const result = await getBook(bookId);
        // console.log("result", result)
        // setBookDetails(result)
        navigate(`/book/${bookId}`)
        
    }

    useEffect(()=> {
        getBookDetails();
    },[])
  return (
    <>
     <div className='flex flex-col items-center'>
       <h1 className='font-bold text-3xl mt-10 mb-10'>
         Popular books 
       </h1>
     </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
        {bookData?.map((data) => (
          <div
            key={data?._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            
            <div className="p-4">
              <h1 className="text-xl font-bold text-gray-800">{data?.title}</h1>
              <h2 className="text-md text-gray-600">by {data?.author}</h2>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">{data?.description}</p>
              
              <button 
              onClick={()=>clickHandler(data?._id)}
              className="mt-4 inline-block text-blue-500 hover:underline"
              >
                  Read More
              </button>
              
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="flex w-full mt-40">
           <Footer/>
        </div>
    </>
  )
}

export default Book
