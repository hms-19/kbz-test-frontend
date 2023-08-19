import React from 'react'
import Button from './Button'
import { FaLongArrowAltRight } from "react-icons/fa"

interface ChallangeProps {
    iconUrl: string,
    title: string,
    body: string,
    textColor?: string,
    bgColor?: string,
    linkColor?: string,
}

const ChallangeCard = (props: ChallangeProps) => {
  return (
    <div className={`challange-card ${props.bgColor}`}>
        <img src={props.iconUrl} alt="AML Technology" className='my-2' />
        <h3 className={`body-1-fz my-2 ${props.textColor}`}>
            {props.title}
        </h3>
        <p className={`body-2-fz  my-2 ${props.textColor}`}>
            {props.body}
        </p>
        <Button text='Get Started' styles={`secondaryButton ${props.linkColor}`} icon={<FaLongArrowAltRight className={props.linkColor} />} />
    </div>
  )
}

export default ChallangeCard
