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
import nightwind from "nightwind/helper"
import { setMode } from "../state"
import { useDispatch } from "react-redux"

const Navbar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  return (
    <AppBar className="static bg-none shadow-none">
      <Toolbar className="flex justify-between w-full">
        {/* Left Side */}
        <FlexBetween>
          <IconButton
            onClick={() => {
              console.log("open/close sidebar")
            }}
          >
            <MenuIcon />
          </IconButton>
          <FlexBetween style="bg-background-alt rounded-lg gap-12 pl-3 pr-3">
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
