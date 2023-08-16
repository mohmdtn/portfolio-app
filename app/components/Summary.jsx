"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";
import { SiteContext } from "../context/site-context";
import React from "react";

export const Summary = () => {
  const { theme } = React.useContext(SiteContext); 
  return (
    <section className="summary">
      <div className="row m-0">
        <div className="col-md-6 mb-md-0 mb-4">
          <h4>Hi there!</h4>
          <p>I'm Mohammad Taghinasab, a 23-year-old individual from the charming city of Babol. Armed with a Bachelor's degree in Computer Engineering, with a specialized focus on Software, I proudly hail from Babol University of Science and Technology. Presently, my academic pursuit takes me into the realm of Artificial Intelligence, as I ambitiously undertake a Master's degree. My tryst with the world of professional web development began roughly 3.5 years ago. Since then, I have been deeply engrossed in both the art of frontend and backend programming, each offering its unique challenge and charm. My fervent desire for learning fuels my enthusiasm, constantly driving me to embrace new technologies and ideas.</p>
          <Link href={"/about"}><Button sx={theme == "light" ? { bgcolor:"#8B5CF6" } : { bgcolor:"#DDD6FE", color: "#000" }} variant="contained" color="secondary">READ MORE</Button></Link>
        </div>
        <div className="col-md-6 position-relative d-flex justify-content-end align-items-center overflow-hidden">
          <div className="rectangle"></div>
          <Image src="/pictures/about.jpg" alt="mohammad taghinasab" layout="responsive" width={369} height={500} />
        </div>
      </div>
    </section>
  );
};
