import React from 'react'

import Home from '../Pages/Home'
import About from '../Pages/About'

// import NoFound from '../Pages/NoFound'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import {Project} from '../Pages/Project'
import Login from '../Component/Login'
import NoFound from '../Pages/NoFound'
import PrivetRoute from './PrivetRoute'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={
        <PrivetRoute>
        <Product/>
        </PrivetRoute>
        }></Route>
        <Route path='/project/:id' element={<Project/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        <Route path='*' element={<NoFound/>}></Route>
        
      </Routes>
    </div>
  )
}

export default AllRouter
