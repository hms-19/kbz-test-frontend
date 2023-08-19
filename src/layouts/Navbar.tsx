import React, { useState } from 'react'
import { BiMobileAlt, BiMailSend, BiSearchAlt2 } from "react-icons/bi";
import '../styles/navbar.css'
import { Link, NavLink, useNavigate, createSearchParams } from 'react-router-dom';
const Navbar : React.FC<{}>  = () => {

  const [inputShow, setInputShow] = useState(false)
  const navigate = useNavigate();
  const [title, setTitle] = useState('')

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
    <>
        <header>
          <div className="container">
            <div className='header-content'>
                <div className='col-1 flex items-center column-gap-1'>
                    <BiMobileAlt className='body-fz' />
                    <span className='body-2-fz'>
                        +959 7980 65880
                    </span>
                </div>
                <p className='col-2 body-2-fz'>
                  UPDATES – Click Here for KBZ Money News Alerts – UPDATES
                </p>
                <div className='col-3 flex items-center column-gap-1'>
                    <span className='body-2-fz'>
                      admin@kbzmoney.com
                    </span>
                    <BiMailSend className='body-fz' />
                </div>
            </div>
          </div>
        </header>
        <nav>
            <div className='navbar container'>
                <Link to='/' className='logo'>
                        <img src="/images/logo.png" alt="KBZ Logo" />
                </Link>
                <ul className={inputShow ? 'nav-ul-active' : ''}>
                  <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                       isActive ? "activeNav" : ""
                    }
                    >
                    Home
                  </NavLink>
                  </li>
                  <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                       isActive ? "activeNav" : ""
                    }
                    >
                    Blog
                  </NavLink>
                  </li>
                </ul>
                <div className={`search-box`}>
                  <input 
                    type="text" 
                    className={`search-input ${inputShow ? 'active' : ''}`} 
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e.target.value)}/>
                  <BiSearchAlt2 className='search-btn' onClick={() => setInputShow(!inputShow)} />
                </div>
            </div>
        </nav>
    </>
  )
}

export default  Navbar
