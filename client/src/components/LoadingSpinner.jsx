import React from "react"
import { CircularProgress } from "@mui/material"

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-max">
      <CircularProgress />
    </div>
  )
}

export default LoadingSpinner
