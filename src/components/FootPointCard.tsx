import React from 'react'

interface FootPointCardProps {
    title: string,
    iconUrl: string,
    bgColor: string,
    countries: string[]
}

const FootPointCard = ({title,iconUrl,bgColor,countries}: FootPointCardProps) => {
  return (
    <div className='footpoint-card'>
        <div className="img" style={{ backgroundColor: bgColor }}>
            <img src={iconUrl} alt={title} />
        </div>
        <div className="content">
            <h3 className="card-title-fz my-3">{title}</h3>
            <div className='line'></div>
            {
                countries.map((country,index) => (
                    <p key={index} className='my-2 primary-color-body-1'>{country}</p>
                ))
            }
        </div>

    </div>
  )
}

export default FootPointCard
