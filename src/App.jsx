import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Book from './components/core/Book'
import BookDetails from './components/core/BookDetails'
import UserProfile from './components/core/UserProfile'

function App() {

  return (
    <>
     <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/books' element={<Book/>}/>
       <Route path="/book/:bookId" element={<BookDetails />} />
       <Route path='/profile' element={<UserProfile/>}/>


      </Routes>
    </>
  )
}

export default App
