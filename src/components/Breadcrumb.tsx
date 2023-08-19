import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/breadcrumb.css'

interface BreadcrumbProps {
    title: string,
    links: {
        text: string,
        uri: string
    }[]
}

const Breadcrumb = ({title, links}: BreadcrumbProps) => {
  return (
    <section id='breadcrumb'>
        <div className="container">
          <h2 className="subtitle-fz text-white text-center my-3">
              {title}
          </h2>
          <div className='flex gap-2 flex-wrap justify-center'>
            {
              links.map((link,index) => (
                  <React.Fragment key={index}>
                    <Link to={link.uri} style={{color: links.length - 1 != index ?  "#8FA5AE" : '#fff'}}>
                      {link.text}
                    </Link>
                    <p>
                      {
                        links.length - 1 == index ? '' : '>'
                      }
                    </p>
                  </React.Fragment>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Breadcrumb
