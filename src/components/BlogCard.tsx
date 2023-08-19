import React from 'react'
import Button from './Button'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { BlogCardProps } from '../types';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';


const BlogCard = ({blog}: BlogCardProps | any) => {
  return (
    <div className='blog-card'>
        <img src={blog?.image} className='blog-card-img' alt="Image 1"/>
        <div className="content">
            <h3 className="card-title-fz primary-color-title">
                {blog.title}
            </h3>
            <div className="author-details flex flex-wrap my-2 items-center gap-2">
                <img src={blog.avatar} alt="" />
                <p className='primary-color-body-1 small-body-fz flex-grow'>
                    {blog.author}
                </p>
                <p className='primary-color-body-1 small-body-fz'>
                    <BiTimeFive /> {format(new Date(blog.createdAt),'dd MMM yyyy')}
                </p>
            </div>
            <p className='primary-color-body-1 body-2-fz my-3'>
                {blog.description?.slice(0,150)}...
            </p>
            <Link to={`/blogs/${blog.id}`} className='decoration-none'>
                <Button text='Read More' styles={`secondaryButton primary-color-title`} icon={<FaLongArrowAltRight />} />
            </Link>
        </div>
    </div>
  )
}

export default BlogCard
