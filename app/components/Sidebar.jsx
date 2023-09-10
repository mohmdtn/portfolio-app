"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FiSun, FiMoon } from "react-icons/fi";
import { SiteContext } from "../context/site-context";
import React from "react";
import Drawer from '@mui/material/Drawer';

export const Sidebar = () => {
  const { setIsResumeModal, theme, setTheme ,isSidebarOpen, setisSidebarOpen } = React.useContext(SiteContext);

  return (
    <Drawer anchor={"right"} open={isSidebarOpen} onClose={() => setisSidebarOpen(false)} >
      <nav className="d-flex sidebar flex-column" onClick={() => setisSidebarOpen(false)}>
        <div className="d-flex flex-column links">
          <Button className="w-170px" color="secondary"><Link href="/">Home</Link></Button>
          <Button className="w-170px" color="secondary"><Link href="/projects">Projects</Link></Button>
          <Button className="w-170px" color="secondary"><Link href="/about">About</Link></Button>
          <Button className="w-170px" onClick={() => setIsResumeModal(true)} color="secondary"><span>Resume</span></Button>
        </div>
        {
          theme == "light"
          ? <IconButton onClick={() => setTheme("dark")} color="secondary" className="them"><FiSun /> </IconButton>
          : <IconButton onClick={() => setTheme("light")} color="secondary" className="theme"><FiMoon /></IconButton>
        }
      </nav>
    </Drawer>
  )
}