import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRouter />}>
        <Route path="profile" element={<Profile />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="updateblog/:id" element={<UpdateBlog />} />
        <Route path="detail/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default AppRouter