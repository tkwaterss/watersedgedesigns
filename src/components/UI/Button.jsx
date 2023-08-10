import React from 'react'
import classes from "./Button.module.css"

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.function}
      className={`${classes.btn} ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button