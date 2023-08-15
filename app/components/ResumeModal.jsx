"use client";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import React from "react";
import { SiteContext } from "../context/site-context";

export const ResumeModal = () => {
  const { isResumeModal, setIsResumeModal } = React.useContext(SiteContext);

  return (
    <Dialog open={isResumeModal} onClose={() => setIsResumeModal(false)}>
        <section className="box p-4">
            <h1>choose one of these</h1>
            <Stack direction="row" spacing={2}>
              <a href="/resume/resume-fn.pdf" download><Button sx={{bgcolor: "#7C3AED"}} variant="contained" color="secondary">Persian Resume</Button></a>
              <a href="/resume/resume-en.pdf" download><Button sx={{bgcolor: "#7C3AED"}} variant="contained" color="secondary">English Resume</Button></a>
            </Stack>
        </section>
    </Dialog>
  );
};
