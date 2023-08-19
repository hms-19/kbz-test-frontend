import React from 'react'

interface ButtonProps {
    text: string,
    icon?: React.ReactElement,
    styles?: string;
    onClick?: (event ? : React.MouseEvent<HTMLElement>) => void | number | string
}

const Button = (props: ButtonProps) => {
  return (
    <button className={props.styles} onClick={props.onClick}>
        <span>{props.text}</span>
        {props.icon}
    </button>
  )
}

export default Button 
