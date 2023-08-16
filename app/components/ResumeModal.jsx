"use client";

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import React from "react";
import { SiteContext } from "../context/site-context";

export const ResumeModal = () => {
  const { isResumeModal, setIsResumeModal, theme } = React.useContext(SiteContext);

  return (
    <Dialog open={isResumeModal} onClose={() => setIsResumeModal(false)}>
        <section className="box p-4">
            <h1>choose one of these</h1>
            <Stack direction="row" spacing={2}>
              <a href="/resume/resume-fa.pdf" download="resume-fa.pdf"><Button sx={theme == "light" ? { bgcolor:"#7C3AED" } : { bgcolor:"#DDD6FE", color: "#000" }} variant="contained" color="secondary">Persian Resume</Button></a>
              <a href="/resume/resume-en.pdf" download="resume-fa.pdf"><Button sx={theme == "light" ? { bgcolor:"#7C3AED" } : { bgcolor:"#DDD6FE", color: "#000" }} variant="contained" color="secondary">English Resume</Button></a>
            </Stack>
        </section>
    </Dialog>
  );
};
