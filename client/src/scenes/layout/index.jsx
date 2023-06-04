import React, { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import Navbar from "../../components/Navbar"

const Layout = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
