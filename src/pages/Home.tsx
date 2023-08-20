import React from 'react'
import '../styles/home.css'
import Button from '../components/Button'
import { FaLongArrowAltRight } from "react-icons/fa"
import ChallangeCard from '../components/ChallangeCard'
import { serviceData } from '../data/service'
import ServiceCard from '../components/ServiceCard'
import { footPointData } from '../data/footpoint'
import FootPointCard from '../components/FootPointCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { blogData } from '../data/blog'
import BlogCard from '../components/BlogCard'
import Subscribe from '../components/Subscribe'
import { BlogCardProps } from '../types';
import { useGetBlogsQuery } from '../features/apis/blogsSlice'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';

const Home : React.FC<{}> = () => {

  const { data, error, isLoading, isError } = useGetBlogsQuery({
    page: 1,
    per_page: 6,
  });

  if(!isLoading){
    if(data?.status == 1){
        // TODO: Change with Sweet Alert
        console.log("Error Alert" + data?.message)
      }
  }

  return (
    isLoading ? (
        <Loading />
        ) : isError ? (
          <>Error</>
        ) : (
            <>
                <section id="banner" className='section-spacing'>
                    <div className="container">
                        <div className="bannerRow">
                            <div className="flex flex-column row-gap-4">
                                <h1 className="main-title-fz primary-color-title">
                                    <span className="main-title-fz primary-main-color">KBZ Money</span> compass anti money
                                    laundering technology and services redefined
                                </h1>
                                <p className="body-1-fz">
                                    KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership.
                                </p>
                                <Button text={'Get Started'} icon={<FaLongArrowAltRight />} styles={`mainButton`} />
                            </div>
                            <div className="">
                                <img src="/images/banner.png" className='bannerImg' alt="banner Image" />
                            </div>
                        </div>
                    </div>

                    <div className="ellipse-1"></div>
                    <div className="ellipse-2"></div>
                </section> 
                
                <section id="currentChallenge" className='section-spacing'>
                    <div className='container aml'>
                        <ChallangeCard 
                            title='AML Technology' 
                            iconUrl='/images/aml-tech.svg' 
                            body='KBZ Money’s AML Compass Platform combines cutting-edge technology and proven...' textColor='text-white' 
                            bgColor='primary-main-bg-color' />
                        <ChallangeCard 
                            title='AML Outsourcing' 
                            iconUrl='/images/aml-outsourcing.svg' 
                            body='Compliance as a Service ™ or CAS delivers not just systems through its AML Compass...' 
                            textColor='primary-color-body-1'
                            linkColor='primary-main-color' />
                        <ChallangeCard 
                            title='Crypto Currencies' 
                            iconUrl='/images/aml-crypto.svg' 
                            body='The Crypto currency market is one of the most exciting and rapidly developing...' 
                            textColor='primary-color-body-1' 
                            linkColor='primary-main-color' />
                    </div>

                    <div className="container contentContainer">
                        <img src="/images/challenge.png" alt="Challenge" />
                        <div>
                            <h2 className="subtitle-fz primary-color-title">
                                The Current Challenges
                            </h2>
                            <p className='body-1-fz primary-color-body-1 my-3'>
                                Legal requirements and recent developments compel Financial Institutions to adopt comprehensive and effective risk-based controls to prevent misuse by money launderers or purveyors of terrorist acts.
                            </p>
                            <p className='body-1-fz primary-color-body-1 my-3'>
                                Anti Money Laundering, Terrorism Financing, Fraud, and related regulations continue to increase compliance operating costs for companies in the financial services space.
                            </p>
                            <p className='body-1-fz primary-color-body-1 my-3'>
                                Untested, rubber stamp solutions adopted to appease regulators will not do in today’s environment.
                            </p>
                        </div>
                    </div>
                </section>  

                <section id="solution" className='vector-bg section-spacing'>
                    <div className="container contentContainer">
                        <div>
                            <h2 className="subtitle-fz text-white primary-color-title">
                                Our Solutions
                            </h2>
                            <p className='body-1-fz primary-color-body-1 text-white my-3'>
                                KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.                    
                            </p>
                            <p className='body-1-fz primary-color-body-1 text-white my-3'>
                                KBZ Money offers a proven skill and delivers best-in-class AML/BSA consulting and automated AML/BSA and OFAC compliance solutions to financial institutions the world over.                    
                            </p>
                            <p className='body-1-fz primary-color-body-1 text-white my-3'>
                            Our deployment strategies are tailored to meet the individual needs of our clients in the context of a risk-laden world.  Our approach is to provide the most protection in the most intelligent, effective and cost-efficient manner.                    
                            </p>
                        </div>
                        <img src="/images/solution.png" alt="Challenge" />
                    </div>
                    <img src="/images/solution-ellipse-1.svg" className='ellipse ellipse-1' alt="" />
                    <img src="/images/solution-ellipse-2.svg" className='ellipse ellipse-2' alt="" />
                    <img src="/images/solution-ellipse-3.svg" className='ellipse ellipse-3' alt="" />
                </section>

                <section id="industry" className='section-spacing'>
                    <div className="container contentContainer">
                        <img src="/images/industry.png" alt="Solution" />
                        <div>
                            <h2 className="subtitle-fz my-3 primary-color-title">
                                Why We Stand Out in the Industry
                            </h2>
                            <p className='body-1-fz primary-color-body-1 primary-color-body-1 my-3'>
                                KBZ Money Compass Group is a consulting, services and technology firm with a long established legacy of leadership, innovation, and trust in the anti-money laundering compliance field in the United States, Latin America, Europe, Africa, the Middle East and the Far East.  Since its inception we have focused on innovative ways to deliver cutting edge Compliance solutions to our clients in a dynamic and fast-changing 
                                regulatory landscape.                   
                            </p>
                            <Button text={'Learn More'} icon={<FaLongArrowAltRight />} styles={`mainButton`} />
                        </div>
                    </div>
                </section>

                <section id="services" className='vector-bg section-spacing'>
                    <div className="container">
                            <h2 className="subtitle-fz my-3 text-center primary-color-title">
                                Our Services
                            </h2>
                            <p className='body-1-fz primary-color-body-1 primary-color-body-1 my-3 text-center'>
                                KBZ Money leverages technology and our extensive experience to create solutions that are forward thinking, anticipatory, holistic, and most importantly, effective.                   
                            </p>

                            <div className="services-container">
                                    {
                                        serviceData.map((service,index) => (
                                            <ServiceCard key={index} title={service.title} iconUrl={service.iconUrl} />
                                        ))
                                    }
                            </div>
                    </div>
                    <img src="/images/solution-ellipse-1.svg" className='ellipse ellipse-1' alt="" />
                    <img src="/images/solution-ellipse-2.svg" className='ellipse ellipse-2' alt="" />
                    <img src="/images/solution-ellipse-3.svg" className='ellipse ellipse-3' alt="" />
                </section>

                <section id="footpoint" className='section-spacing'>
                    <div className="container">
                            <h2 className="subtitle-fz my-3 text-center primary-color-title">
                                Our Clients and Footprint
                            </h2>
                            <p className='body-1-fz primary-color-body-1 primary-color-body-1 my-3 text-center'>
                                Clients include Banks, Non-Banking Financial Institutions, Non-Financial Institutions, Insurance Companies, Broker Dealers, Payment Processors, Check Cashers, Digital Payments Companies, Money Transmitters, and Crypto Currency Solution Companies including Exchanges and Market Places.                  
                            </p>

                            <div className="footpoint-container">
                                    {
                                        footPointData.map((footpoint,index) => (
                                            <FootPointCard 
                                                key={index} 
                                                title={footpoint.title} 
                                                countries={footpoint.countries}
                                                bgColor={footpoint.bgColor}
                                                iconUrl={footpoint.iconUrl} />
                                        ))
                                    }
                            </div>
                    </div>
                </section>

                <section id="compass" className='vector-bg section-spacing'>
                    <div className="container contentContainer">
                        <div>
                            <h2 className="subtitle-fz text-white primary-color-title">
                                AML Compass
                                Technology 
                                Platforms
                            </h2>
                            <p className='body-1-fz primary-color-body-1 text-white my-3'>
                                Our proprietary AML Compass Suite is a fully automated compliance solution for banks and non-bank financial institutions including hedge funds, broker dealers, insurance companies, and domestic and international MSBs that have regulatory reporting and control…                    
                            </p>
                            <Button text={'Learn More'} icon={<FaLongArrowAltRight />} styles={`mainButton bg-white primary-color-title`} />
                        </div>
                    </div>
                    <img src="/images/circuit.svg" className=' ellipse-1' alt="" />
                    {/* <img src="/images/currency.svg" className=' ellipse-2' alt="" /> */}
                </section>

                <section id="blogs" className='section-spacing'>
                    <div className="container">
                            <h2 className="subtitle-fz my-3 text-center primary-color-title">
                                KBZ Money Alerts
                            </h2>
                        
                            <div className="blogs-container">
                                
                                {
                                    data?.data.length > 0 ?
                                    <Splide aria-label="My Blogs" options={ {
                                        rewind: false,
                                        // type   : 'loop',
                                        drag: true,
                                        perPage: 3,
                                        gap   : '2rem',
                                        breakpoints: {
                                            518: {
                                                perPage: 1,
                                            },
                                            768: {
                                                perPage: 2,
                                            },
                                        }
                                        } }>
                                        {
                                            data?.data.map((blog : BlogCardProps,index : number) => (
                                                <SplideSlide key={index}>
                                                    <BlogCard blog={blog} />
                                                </SplideSlide>
                                            ))
                                        }
                                    </Splide> : <h2>There is no blogs</h2>
                                }

                                <div className="flex justify-center my-4">
                                    <Link to='/blogs' className='decoration-none'>
                                        <Button text={'Load More'} icon={<FaLongArrowAltRight />} styles={`mainButton`} />
                                    </Link>
                                </div>
                            </div>
                    </div>
                </section>

                <Subscribe />
            </>
        )
  )
}

export default Home
