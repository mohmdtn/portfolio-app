import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { animateScroll as scroll } from 'react-scroll';

import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <section className="d-flex justify-content-between align-items-center flex-md-row flex-column">
        <h4 className="mb-md-0 mb-3">Let’s connect</h4>
        <Stack className="buttons" direction="row" spacing={2}>
          <Link href="mailto:mohammad.taghinasab.mt@gmail.com" target="_blank"><Button sx={{bgcolor: "#7C3AED"}} variant="contained" color="secondary" className="py-2"><BsEnvelope /></Button></Link>
          <Link href="https://github.com/mohmdtn" target="_blank"><Button sx={{bgcolor: "#7C3AED"}} variant="contained" color="secondary" className="py-2"><BsGithub /></Button></Link>
          <Link href="https://linkedin.com/in/mohammad-taghinasab" target="_blank"><Button sx={{bgcolor: "#7C3AED"}} variant="contained" color="secondary" className="py-2"><BsLinkedin /></Button></Link>
        </Stack>
      </section>
      <section className="d-flex justify-content-between align-items-center flex-md-row flex-column my-md-5 my-3 text-md-start text-center">
        <h6 className="mb-md-0 mb-3">Shoot me email to chat about my work or just like to say hey 👋</h6>
        <Button color="secondary" className="back-top" onClick={() => scroll.scrollToTop({smooth: true})}>Back To Top <AiOutlineArrowUp /></Button>
      </section>
      <section>
        <p>© Coded by Mohammad Taghinasab 💜</p>
      </section>
    </footer>
  );
};
