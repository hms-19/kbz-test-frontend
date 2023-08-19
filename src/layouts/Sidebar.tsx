import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import '../styles/sidebar.css'
import { blogData } from '../data/blog';
import RecentPostCard from '../components/RecentPostCard';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { BlogCardProps, CategoryProps, TagProps } from '../types';
import { useGetBlogsQuery } from '../features/apis/blogsSlice';
import { useGetCategoriesQuery } from '../features/apis/categoriesSlice';
import { useGetTagsQuery } from '../features/apis/tagsSlice';

interface SidebarProps {
    sidebarShow: boolean,
}

const Sidebar = ({sidebarShow}: SidebarProps) => {

    const { data: blogs, isLoading, isError } = useGetBlogsQuery({
        page: 1,
        per_page: 6,
    });

    const { data: categories } = useGetCategoriesQuery({
        page: 1,
        per_page: "all",
    });

    const navigate = useNavigate();


    const { data: tags } = useGetTagsQuery({
        page: 1,
        per_page: "all",
    });

    const [title, setTitle] = useState('')

    if(!isLoading){
        if(blogs?.status == 1){
            // TODO: Change with Sweet Alert
            console.log("Error Alert" + blogs?.message)
        }
    }


    const handleChange = (val : string) => {
        setTitle(val)

        navigate({
            pathname: "/blogs",
            search: createSearchParams({
                title: val
            }).toString()
        });
    }

  return (
    <div className={sidebarShow ? 'sidebar sidebarToggle' : 'sidebar'}>

        <div className='search'>
            <BiSearchAlt2 className='search-icon' />
            <input 
                type="text" 
                placeholder='Search here'  
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value)}
            />
        </div>
        
        <div className="card">
            <div className="card-header">
                <h3>
                    Categories
                </h3>
            </div>
            <div className="card-body">
                {
                    categories?.total_count > 0 ?
                    categories.data.map((category : CategoryProps, index: number) => (
                        <Link key={index} to={`/blogs?category_id=${category.id}`} className="decoration-none flex justify-space-between py-2 bg-white primary-color-body-1">
                            <p className="body-1-fz primary-color-body-1">
                                {category.name}
                            </p>
                            <p>
                                {category.blogs_count}
                            </p>
                        </Link>  
                    ))
                    : <></>
                }
            </div>
        </div>

        <div className="card">
            <div className="card-header">
                <h3>
                    Recent Post
                </h3>
            </div>
            <div className="card-body">
                {
                    blogs?.data?.length > 0 ?
                    
                    blogs?.data?.map((blog: BlogCardProps) => (
                        <RecentPostCard 
                            key={blog.id}
                            title={blog.title} 
                            image={blog.image}
                            createdAt={blog.createdAt} 
                            id={blog.id} />
                    )) : <h2>There is no blogs</h2>   
                }
            </div>
        </div>

        <div className="card">
            <div className="card-header">
                <h3>
                    Tags
                </h3>
            </div>
            <div className="card-body">
                <div className="flex gap-3 flex-wrap bg-white">
                    {
                        tags?.total_count > 0 ?
                        tags.data.map((tag : TagProps) => (
                            <Link key={tag.id} to={`/blogs?tag_id=${tag.id}`} className='tag'>
                                {tag.name}
                            </Link>
                        ))
                        : <></>
                    }
                </div>

            </div>
        </div>

        <div className="subscribe">
            <h2>Subscribe to KBZ Money Alerts</h2>
            <div className='flex flex-column justify-center items-center gap-4'>
                <input type="text" placeholder='Email Address' />
                <Button text='Subscribe' styles='subscribeButton bgInfo text-white' />
            </div>
        </div>
    </div>
  )
}

export default Sidebar
