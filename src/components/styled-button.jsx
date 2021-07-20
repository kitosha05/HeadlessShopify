import React from "react"
import { customButton } from "./styled-button.module.css"

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } ${customButton}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
