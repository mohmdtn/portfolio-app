"use client";

import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ResumeModal } from "./ResumeModal";
import { SiteContext } from "../context/site-context";

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
    </body>
  );
};
