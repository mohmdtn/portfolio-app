"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FiSun, FiMoon } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { SiteContext } from "../context/site-context";
import React from "react";
import { Sidebar } from "./sidebar";


export const Nav = () => {
  const { setIsResumeModal, theme, setTheme, setisSidebarOpen } = React.useContext(SiteContext);

  return (
    <nav>
      <h2 className="fw-bold mb-0">ms<span>.</span></h2>
      <div className="d-md-flex d-none">
        <div className="links">
          <Button color="secondary"><Link href="/">Home</Link></Button>
          <Button color="secondary"><Link href="/projects">Projects</Link></Button>
          <Button color="secondary"><Link href="/about">About</Link></Button>
          <Button onClick={() => setIsResumeModal(true)} color="secondary"><span>Resume</span></Button>
        </div>
        {
          theme == "light"
          ? <IconButton onClick={() => setTheme("dark")} color="secondary" className="theme ms-4"><FiSun /> </IconButton>
          : <IconButton onClick={() => setTheme("light")} color="secondary" className="theme ms-4"><FiMoon /></IconButton>
        }
      </div>
      <div className="d-block d-md-none menu"><RiMenu3Fill onClick={() => setisSidebarOpen(true)} /></div>
      <Sidebar />
    </nav>
  );
};
