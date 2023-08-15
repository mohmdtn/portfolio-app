"use client";

import React from "react";

export const SiteContext = React.createContext();

export const SiteProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const [isResumeModal, setIsResumeModal] = React.useState(false);

  return (
    <SiteContext.Provider value={{ theme, setTheme, isResumeModal, setIsResumeModal }}>
      {children}
    </SiteContext.Provider>
  );
};
