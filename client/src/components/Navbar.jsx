import React from "react"
import { AppBar, Toolbar, IconButton, InputBase, useTheme } from "@mui/material"
import {
  DarkModeOutlined,
  LightModeOutlined,
  Search,
  SettingsOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material"
import profileImage from "../assets/skyrim_dragon_skull_head.jpeg"
import FlexBetween from "./FlexBetween"
import { setMode } from "../state"
import { useDispatch } from "react-redux"

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* Right Side */}
        <FlexBetween className="gap-6">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined className=" text-2xl" />
            ) : (
              <LightModeOutlined className="text-2xl" />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined className="text-2xl" />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
