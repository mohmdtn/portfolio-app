"use client";

import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ResumeModal } from "./ResumeModal";
import { SiteContext } from "../context/site-context";
import Script from "next/script";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const Provider = ({ children }) => {
  const { theme } = React.useContext(SiteContext);
  return (
    <body className={`${inter.className} ${theme}`}>
      <Nav />
      <ResumeModal />
      {children}
      <Footer />
      <div className="ball"></div>
      <Script src="/script/mouse.js" />
    </body>
  );
};
