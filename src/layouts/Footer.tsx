import React from 'react'
import '../styles/footer.css'
import { BiSolidMap, BiLogoTelegram, BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi'
import { FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer : React.FC<{}> = () => {
  return (
    <footer>
      <div className="container contentContainer">
          <div className='flex flex-column row-gap-3'>
              <div className='logo'>
                <img src="/images/white-logo.png" alt="" />
              </div>
              <div className='flex gap-2 items-center'>
                <BiSolidMap className='status-color-warning' />
                <p className='text-white body-1-fz'>
                  1250 Capital of Texas Hwy. South <br />
                  Building 3, 
                  Suite 400 
                  Austin, TX 78746
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <BiLogoTelegram className='status-color-warning' />
                <p className='text-white body-1-fz'>
                  Support: admin@kbzmoney.com
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <FaPhone className='status-color-warning' />
                <p className='text-white body-1-fz'>
                  Hotline: +959 7980 65880
                </p>
              </div>
          </div>
          <div className='flex flex-column row-gap-3'>
            <h3 className="card-title-fz text-white">
              Quick Links
            </h3>
            <div className='my-3 flex flex-column row-gap-3'>
              <Link to='/'>
                Home
              </Link>
              <Link to='/'>
                Services
              </Link>
              <Link to='/'>
                AML Technology
              </Link>
              <Link to='/'>
                Crypto Currencies
              </Link>
              <Link to='/'>
                Resources
              </Link>
            </div>
          </div>
          <div className='flex flex-column row-gap-3'>
            <h3 className="card-title-fz text-white hide-title">
              Quick Links
            </h3>
            <div className='my-3 flex flex-column row-gap-3'>
              <Link to='/'>
                Contact
              </Link>
              <Link to='/'>
                About Us
              </Link>
              <Link to='/'>
                Client Support
              </Link>
              <Link to='/'>
                Crypto Currencies
              </Link>
              <Link to='/'>
                Alerts
              </Link>
            </div>
          </div>
          <div className='flex flex-column row-gap-3'>
            <h3 className="card-title-fz text-white">
              About us
            </h3>
            <div className='my-3 flex flex-column row-gap-3'>
              <Link to='/'>
                Disclaimer
              </Link>
              <Link to='/'>
                Privacy Policy
              </Link>
              <Link to='/'>
                Terms of Service
              </Link>
              <Link to='/'>
                Carrier
              </Link>
            </div>
          </div>
      </div>
      <div className="container my-3">
        <div className="line"></div>
        <div className="my-3 flex flex-wrap justify-space-between items-center gap-4">
          <p className="text-white">
            Copyright © 2022 <span className='status-color-warning fw-bold'>KBZ Money</span>. All Rights Reserved.
          </p>
          <div className="social flex flex-wrap gap-3">
              <Link to='/'>
                  <BiLogoFacebook />
              </Link>

              <Link to='/'>
                  <BiLogoLinkedin />
              </Link>

              <Link to='/'>
                  <BiLogoInstagram />
              </Link>

              <Link to='/'>
                  <BiLogoTwitter />
              </Link>
          </div>
        </div>
      </div>
      <img src="/images/footer-bg-1.svg" className='img-1' alt="" />
      <img src="/images/footer-bg-2.svg" className='img-2' alt="" />
    </footer>
  )
}

export default Footer
