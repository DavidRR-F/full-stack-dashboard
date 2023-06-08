import React, { useState, useEffect } from "react"
import { setScreenSize } from "../../state"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import { useGetUserQuery } from "../../state/api"

const Layout = () => {
  const dispatch = useDispatch()
  const isMobile = useSelector((state) => state.global.isBelowThreshold)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = useSelector((state) => state.global.userId)
  const { data } = useGetUserQuery(userId)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      dispatch(setScreenSize(screenWidth))
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initialize the screen size on component mount

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [dispatch])

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false)
    } else {
      setIsSidebarOpen(true)
    }
  }, [isMobile])

  return (
    <div className="sm:flex block w-full h-full">
      <Sidebar
        user={data || {}}
        isMobile={isMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="grid-flow-col w-full">
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
