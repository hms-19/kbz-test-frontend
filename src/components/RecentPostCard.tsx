import React from 'react'
import { BlogCardProps } from '../types';
import { formatDistance, subDays } from 'date-fns'
import '../styles/recent-post.css'
import { Link } from 'react-router-dom';

const RecentPostCard = ({title, image, createdAt, id}: BlogCardProps) => {
  return (
    <Link to={`/blogs/${id}`} className='flex items-center justify-start items-start my-4 column-gap-2 decoration-none'>
        <img src={image} alt={title} className='recent-post-image' />

        <div className='flex flex-column row-gap-1'>
            <h2 className="card-title-fz primary-color-title">
                {title}
            </h2>
            {
                createdAt ?
                <p className="primary-color-body-2 small-body-fz primary-color-body-1">
                    {formatDistance(subDays(new Date(createdAt), 3), new Date(), { addSuffix: true })}
                </p> : <></>
            }
        </div>
    </Link>
  )
}

export default RecentPostCard
