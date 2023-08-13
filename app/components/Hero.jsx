import React from "react";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Link from "next/link";

import { BsGithub, BsLinkedin, BsArrowDownCircle } from "react-icons/bs";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="row m-0 h-100 position-relative">

        {/* hero info */}
        <div className="col-md-7 ps-0 d-flex flex-column justify-content-center">
          <h1>Hi, I’m Mohammad Taghinasab.</h1>
          <h6>Full-stack Developer</h6>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur. Ligula nunc non commodo scelerisque gravida.</p>

          <div className="buttons">
            <Stack direction="row" spacing={2}>
              <Link href=""><Button sx={{bgcolor: "#7C3AED"}} variant="contained" color="secondary" className="py-2"><BsGithub /></Button></Link>
              <Link href=""><Button sx={{bgcolor: "#7C3AED"}} variant="contained" color="secondary" className="py-2"><BsLinkedin /></Button></Link>
              <Link href=""><Button sx={{borderColor: "#7C3AED", color: "#000"}} variant="outlined" color="secondary">GET IN TOUCH</Button></Link>
              <Link href=""><Button sx={{borderColor: "#7C3AED", color: "#000"}} variant="outlined" color="secondary">RESOME</Button></Link>
            </Stack>
          </div>
        </div>

        {/* hero picture */}
        <div className="col-md-5">

        </div>

        {/* scroll */}
        <div className="scroll">
          <p>scroll</p>
          <BsArrowDownCircle />
        </div>

      </div>
    </section>
  );
};
