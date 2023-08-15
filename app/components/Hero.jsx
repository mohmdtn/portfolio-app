"use client";

import React from "react";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Link from "next/link";
import Image from "next/image";
import { SiteContext } from "../context/site-context";
import { animateScroll as scroll } from 'react-scroll';

import { BsGithub, BsLinkedin, BsArrowDownCircle } from "react-icons/bs";

export const Hero = () => {
  const { setIsResumeModal, theme } = React.useContext(SiteContext);

  return (
    <section className="hero">
      <div className="row m-0 h-100 position-relative">

        {/* hero info */}
        <div className="col-md-7 ps-md-0 p-md-2 p-0 d-flex flex-column justify-content-center">
          <h1>Hi, I’m Mohammad Taghinasab.</h1>
          <h6>Full-stack Developer</h6>
          <p className="mb-4 text-capitalize">i love to make applications with React Js, Next Js and Laravel.</p>

          <div className="buttons">
            <Stack direction="row" spacing={2}>
              <Link href="https://github.com/mohmdtn" target="_blank"><Button sx={theme == "light" ? { bgcolor:"#7C3AED" } : { bgcolor:"#DDD6FE", color: "#000" }} variant="contained" color="secondary" className="py-2 icon"><BsGithub /></Button></Link>
              <Link href="https://linkedin.com/in/mohammad-taghinasab" target="_blank"><Button sx={theme == "light" ? { bgcolor:"#7C3AED" } : { bgcolor:"#DDD6FE", color: "#000" }} variant="contained" color="secondary" className="py-2 icon"><BsLinkedin /></Button></Link>
              <Button onClick={() => scroll.scrollToBottom()} sx={theme == "light" ? {borderColor: "#7C3AED", color: "#000"} : {borderColor: "#737373", color: "#fff"}} variant="outlined" color="secondary">GET IN TOUCH</Button>
              <Button className="d-inline-block d-none" onClick={() => setIsResumeModal(true)} sx={theme == "light" ? {borderColor: "#7C3AED", color: "#000"} : {borderColor: "#737373", color: "#fff"}} variant="outlined" color="secondary">RESOME</Button>
            </Stack>
          </div>
        </div>

        {/* hero picture */}
        <div className="col-md-5 pe-0 d-md-flex d-none flex-column justify-content-center align-items-center">
          <Image src={"/pictures/hero.png"} width={450} height={450} layout="responsive" alt="mohammad taghinasab" />
        </div>

        {/* scroll */}
        <div className="scroll" onClick={() => scroll.scrollTo(500)}>
          <p>scroll</p>
          <BsArrowDownCircle />
        </div>

      </div>
    </section>
  );
};
