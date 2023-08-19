import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import NotFound from './pages/NotFound'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/blogs" element={<Blog />} /> 
        <Route path="/blogs/:id" element={<BlogDetail />} /> 
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  )
}

export default Router
