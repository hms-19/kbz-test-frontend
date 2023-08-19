import React from 'react'
import '../styles/related-post.css'
import { blogData } from '../data/blog';
import BlogCard from './BlogCard';
const RelatedBlogs : React.FC<{}> = () => {
  return (
      <section id="realted-blogs">

        <div className="container">
            <h2 className="subtitle-fz primary-color-title text-center my-3">
                Related Post
            </h2>

            <div className="related-container">
                {
                  blogData.map((blog,index) => (
                    <BlogCard blog={blog} key={index} />
                  ))
                }
            </div>
        </div>

        <img src="/images/related-ellipse-1.svg" className='ellipse ellipse-1' alt="" />
        <img src="/images/related-ellipse-2.svg" className='ellipse ellipse-2' alt="" />
        <img src="/images/related-ellipse-3.svg" className='ellipse ellipse-3' alt="" />

     </section>
  )
}

export default RelatedBlogs
