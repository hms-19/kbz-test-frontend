import React from 'react'

interface ServiceCardProps {
    iconUrl: string,
    title: string
}

const ServiceCard = ({iconUrl, title} : ServiceCardProps) => {
  return (
    <div className='service-card'>
        <img src={iconUrl} alt={title} />
        <p className="card-title-fz primary-main-color">{title}</p>
    </div>
  )
}

export default ServiceCard
