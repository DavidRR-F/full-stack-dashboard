import React from "react"

const FlexBetween = ({ children, style }) => {
  return (
    <div className={`flex justify-between items-center ${style}`}>
      {children}
    </div>
  )
}

export default FlexBetween
