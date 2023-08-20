import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BlogCard from '../components/BlogCard'
import Sidebar from '../layouts/Sidebar';
import '../styles/blog.css'
import { FaLongArrowAltRight } from 'react-icons/fa';
import Button from '../components/Button';
import { BiFilterAlt } from 'react-icons/bi';
import { BlogCardProps, BlogProps } from '../types';
import { useGetBlogsQuery, blogsApi } from '../features/apis/blogsSlice';
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useDispatch } from 'react-redux';
const Blog : React.FC<{}> = () => {

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

  const [searchParams, setSearchParams] = useSearchParams()

  let category_id = Number(searchParams.get('category_id')) || ''
  let tag_id = Number(searchParams.get('tag_id')) || ''
  let title = searchParams.get('title') || ''

  const [sidebarShow, setSidebarShow] = useState<boolean>(false)
  const toggleSidebar = () => {
    setSidebarShow(!sidebarShow)
  }

  const [page, setPage] = useState(1)
  const [per_page, setPerPage] = useState(6)
  const [isLoadMore, setIsLoadMore] = useState(false)
  const [combinedData, setCombinedData] = useState<BlogProps>([]);

  const { data, error, isLoading, isError, refetch } = useGetBlogsQuery({
    page: page,
    per_page: per_page,
    title,
    category_id,
    tag_id
  });


  React.useEffect(() => {
    setPage(1);  
  },[title,category_id,tag_id])

  React.useEffect(() => {
      if (data) {
        if(isLoadMore){
          setCombinedData((prevData) => [...prevData, ...data.data]);
        }
        else{
          setCombinedData(data.data);
        }
        setIsLoadMore(false)
      }
    
  }, [data]);  

  if(!isLoading){
    if(data?.status == 1){
      // TODO: Change with Sweet Alert
      console.log("Error Alert" + data?.message)
    }
  }

  const loadMoreData = (event ?:  React.MouseEvent<HTMLElement>) => {
    setIsLoadMore(true)
    setPage((prevPage) => prevPage + 1);  
  }

  return (
    <>
        <Breadcrumb title='Blogs' links={links} />

        {isLoading ? (
          <Loading />
          ) : isError ? (
            <>Error...</>
          ) : (
            <section id='blogs'>
                <h2 className="subtitle-fz text-center my-4 primary-color-title">
                  Latest News
                </h2>
                
                <div className="filter-btn container">
                  <Button 
                      text={'Filter'} 
                      icon={<BiFilterAlt />} 
                      styles={`mainButton`} 
                      onClick={toggleSidebar} />
                </div>

                <div className="blogLayout container">
                  <div className=''>
                      {
                        combinedData.length > 0 ? 
                        <div>
                          <div className={`blog-container ${sidebarShow ? 'hide-blogs': ''}`}>
                            {
                              combinedData.map((blog : BlogCardProps,index: number) => (
                                <BlogCard key={index} blog={blog} />                    
                                                  
                              ))
                            }
                          </div>
                          <div className={`flex justify-center items-center mt-50 ${sidebarShow ? 'hide-blogs': ''}`}>
                            {
                              combinedData.length > 5 ?
                                <Button 
                                text={'Load More'} 
                                icon={<FaLongArrowAltRight />} 
                                styles={`mainButton bg-primary`} 
                                onClick={(event) => loadMoreData(event)} /> : <></>
                            }
                          </div>
                        </div>
                      : <h1 className='text-center'>There is no blogs</h1>
                      }
                  </div>
                  <Sidebar sidebarShow={sidebarShow} />
                </div>
            </section>
          )
        }

        <section id="contact-us">
            <div className="container">
                <h2 className="subtitle-fz primary-color-title">
                  Have Questions or Need to  <br />
                  Book a Consultation?
                </h2>
                <Button text={'Contact Us Now'} icon={<FaLongArrowAltRight />} styles={`mainButton`} />
            </div>

            <img src="/images/arrow.svg" className='arrow-ellipse' alt="" />
            <img src="/images/dots.svg" className='dots-ellipse' alt="" />
            <img src="/images/leaf.svg" className='leaf-ellipse-1' alt="" />
            <img src="/images/leaf.svg" className='leaf-ellipse-2' alt="" />
        </section>
        
    </>
  )
}

export default Blog
