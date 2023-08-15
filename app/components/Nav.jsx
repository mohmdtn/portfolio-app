"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FiSun, FiMoon } from "react-icons/fi";
import { SiteContext } from "../context/site-context";
import React from "react";


export const Nav = () => {
  const { setIsResumeModal, theme, setTheme } = React.useContext(SiteContext);

  return (
    <nav>
      <h2 className="fw-bold mb-0">ms.</h2>
      <div className="d-flex ">
        <div className="links">
          <Button color="secondary"><Link href="/">Home</Link></Button>
          <Button color="secondary"><Link href="/projects">Projects</Link></Button>
          <Button color="secondary"><Link href="/about">About</Link></Button>
          <Button onClick={() => setIsResumeModal(true)} color="secondary"><span>Resume</span></Button>
        </div>
        <IconButton onClick={() => setTheme("dark")} color="secondary" className="theme ms-4">{theme == "light" ? <FiSun /> : <FiMoon /> }</IconButton>
      </div>
    </nav>
  );
};
