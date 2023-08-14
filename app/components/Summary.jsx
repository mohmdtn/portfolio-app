import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

export const Summary = () => {
  return (
    <section className="summary">
      <div className="row m-0">
        <div className="col-md-6">
          <h4>Hi there!</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Scelerisque cursus neque pellentesque eu tempor leo est tortor praesent. Adipiscing euismod faucibus proin odio eget aliquet aliquet. Pellentesque sagittis quis dui ut. Non posuere convallis ullamcorper quam justo.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Scelerisque cursus neque pellentesque eu tempor leo est tortor praesent. Adipiscing euismod faucibus proin odio eget aliquet aliquet. Pellentesque sagittis quis dui ut. Non posuere convallis ullamcorper quam justo.</p>
          <Link href={"/about-me"}><Button sx={{bgcolor: "#8B5CF6"}} variant="contained" color="secondary">READ MORE</Button></Link>
        </div>
        <div className="col-md-6 position-relative d-flex justify-content-end align-items-center">
          <div className="rectangle"></div>
          <Image src="/pictures/about.jpg" alt="mohammad taghinasab" width={369} height={500} />
        </div>
      </div>
    </section>
  );
};
