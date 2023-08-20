import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BlogCard from '../components/BlogCard'
import Sidebar from '../layouts/Sidebar';
import { format } from 'date-fns';
import '../styles/blog.css'
import { FaEye, FaLongArrowAltRight, FaRegCalendarCheck } from 'react-icons/fa';
import Button from '../components/Button';
import { BiFilterAlt, BiTimeFive, BiCheck } from 'react-icons/bi';
import { BlogCardProps } from '../types';
import { useGetBlogDetailQuery, useGetBlogsQuery } from '../features/apis/blogsSlice';
import { useParams } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import '../styles/blog.css'
import RelatedBlogs from '../components/RelatedBlogs';
import Loading from '../components/Loading';

const BlogDetail : React.FC<{}> = () => {

  let { id } = useParams();
  const [links, setLinks] = useState([
    {
      text: 'Home',
      uri: '/'
    },
    {
      text: 'Blogs',
      uri: '/blogs'
    }
  ])

  const [sidebarShow, setSidebarShow] = useState(false)
  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow)
  }

  const { data: detail, error, isLoading, isError } = useGetBlogDetailQuery({
    id
  });

  if(!isLoading){
    if(detail?.status == 1){
      // TODO: Change with Sweet Alert
      console.log("Error Alert " + detail?.message)
    }
  }

  let blog : BlogCardProps = {
    id: 0,
    title: '',
    image: ''
  }

  if(JSON.stringify(detail?.data) != '{}'){
    blog = detail?.data
  }

  return (
    <>
        <Breadcrumb title={blog?.title} links={links} />

        {isLoading ? (
          <Loading />
          ) : isError ? (
            <>Error...</>
          ) : (
            <>
              <section id='blogs'>
                  
                  <div className="filter-btn container py-4">
                    <Button 
                      text={'Filter'} 
                      icon={<BiFilterAlt />} 
                      styles={`mainButton`} 
                      onClick={toggleSidebar} />
                  </div>

                  <div className="blogLayout container">
                    <div className=''>
                        {
                          JSON.stringify(blog?.title) != '' ? 
                            <div className={`blog-details ${sidebarShow ? 'hide-blogs': ''}`}>
                                <h2 className="subtitle-fz primary-color-title my-2">
                                  {blog.title}
                                </h2>
                                <div className="flex justify-space-between items-center">
                                  <div className="flex gap-3 items-center">
                                    <div className="avatar">
                                      <img src={blog.avatar} className='' alt="" />
                                      <span><BiCheck /></span>
                                    </div>
                                    <h2 className="card-title-fz primary-color-body-1">
                                      {blog.author}
                                    </h2>
                                  </div>
                                  <div className="flex flex-wrap gap-3">
                                    <p className='primary-color-body-1 small-body-fz flex gap-2 items-center'>
                                        <FaRegCalendarCheck /> 
                                        <span>{format(new Date(blog.createdAt ? blog.createdAt : ''),'dd/MM/yyyy')}</span>
                                    </p>
                                    <p className='primary-color-body-1 small-body-fz flex gap-2 items-center'>
                                        <FaEye /> 
                                        <span>25k views</span>
                                    </p>
                                    <p className='primary-color-body-1 small-body-fz flex gap-2 items-center'>
                                      <BiTimeFive /> 
                                      <span>{blog.read_time} min</span>
                                    </p>
                                  </div>
                                </div>
                                <img src={blog.image} className='img' alt="" />
                                <p className='primary-color-body-1'>
                                  {blog.description}
                                </p>
                            </div>
                        : <h1>There is no data</h1>
                        }
                    </div>
                    <Sidebar sidebarShow={sidebarShow} />
                  </div>
              </section>

              <RelatedBlogs />
              
            </>
          )
        }

        <Subscribe />
        
    </>
  )
}

export default BlogDetail
