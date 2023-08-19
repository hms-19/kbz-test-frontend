import React from 'react'
import Button from './Button'
import '../styles/subscribe.css'

const Subscribe : React.FC<{}> = () => {
  return (
    <div>
      <section id="subscribe">
            <div className="container">
                <h1 className='subtitle-fz text-white'>
                    Subscribe Newslatter & get
                    KBZ Money Alerts
                </h1>
                <div className='flex gap-2'>
                    <input type="text" placeholder='Email Address' />
                    <Button text='Subscribe' styles='subscribeButton' />
                </div>
            </div>
      </section>
    </div>
  )
}

export default Subscribe 
