import React, { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSideBarOpen, setIsSidebarOpen] = useState(true)
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonModile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSideBarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box width="100%" height="100%">
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout