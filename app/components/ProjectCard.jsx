import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

import { FaLaravel, FaReact, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiMui, SiPhp, SiMysql, SiMongodb, SiJavascript, SiCss3, SiTailwindcss } from "react-icons/si";

export const ProjectCard = ({ img, desc, title, lang, github, demo }) => {
  return (
    <div className="col-md-6 p-md-4 p-3">
      <article className="project-item">
        <div className="">
          <Image src={img} width={500} height={300} layout="responsive" alt={title} />
        </div>
        <section className="p-3">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="languages">
            {lang.laravel && <Tooltip title="laravel" placement="top"><FaLaravel /></Tooltip>}
            {lang.react && <Tooltip title="React Js" placement="top"><FaReact /></Tooltip>}
            {lang.next && <Tooltip title="Next Js" placement="top"><SiNextdotjs /></Tooltip>}
            {lang.mui && <Tooltip title="Material ui" placement="top"><SiMui /></Tooltip>}
            {lang.tailwind && <Tooltip title="Tailwind css" placement="top"><SiTailwindcss /></Tooltip>}
            {lang.js && <Tooltip title="JavaScript" placement="top"><SiJavascript /></Tooltip>}
            {lang.bootstrap && <Tooltip title="Bootstrap" placement="top"><FaBootstrap /></Tooltip>}
            {lang.php && <Tooltip title="Php" placement="top"><SiPhp /></Tooltip>}
            {lang.mysql && <Tooltip title="MySql" placement="top"><SiMysql /></Tooltip>}
            {lang.mongo && <Tooltip title="MongoDB" placement="top"><SiMongodb /></Tooltip>}
            {lang.css && <Tooltip title="css" placement="top"><SiCss3 /></Tooltip>}
          </div>
          <div className="links">
            <Stack direction="row" spacing={2}>
              <Link href={github}><Button sx={{bgcolor: "#8B5CF6"}} variant="contained" color="secondary">VIEW CODE</Button></Link>
              <Link href={demo}><Button sx={{borderColor: "#8B5CF6", color: "#000"}} variant="outlined" color="secondary">LIVE DEMO</Button></Link>
            </Stack>
          </div>
        </section>
      </article>
    </div>
  );
};
