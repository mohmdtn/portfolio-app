import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { FiSun } from "react-icons/fi";

export const Nav = () => {
  return (
    <nav>
      <h2 className="fw-bold mb-0">ms.</h2>
      <div className="d-flex ">
        <div className="links">
          <Button color="secondary"><Link href="/">Home</Link></Button>
          <Button color="secondary"><Link href="/projects">Projects</Link></Button>
          <Button color="secondary"><Link href="/about">About</Link></Button>
          <Button color="secondary"><Link href="">Resume</Link></Button>
        </div>
        <button type="button" className="theme ms-4"><FiSun /></button>
      </div>
    </nav>
  );
};
