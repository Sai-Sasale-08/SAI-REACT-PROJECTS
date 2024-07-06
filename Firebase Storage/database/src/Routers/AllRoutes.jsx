import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Components/Home'
import Dashboard from '../Components/Dashboard'
import Signup from '../Components/Signup'
import PrivetRoute from './PrivetRoute'
import PostData from '../Components/PostData'
import UpdateData from '../Components/UpdateData'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={
            <PrivetRoute>
                <Dashboard/>
             </PrivetRoute>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/postdata' element={<PostData/>}></Route>
        <Route path='/updatedata/:id' element={<UpdateData/>}></Route>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
