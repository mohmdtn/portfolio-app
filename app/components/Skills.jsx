import { FaLaravel, FaReact, FaBootstrap, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiMui, SiPhp, SiMysql, SiMongodb, SiJavascript, SiCss3, SiTailwindcss, SiHtml5, SiJquery } from "react-icons/si";

export const Skills = () => {
  return (
    <section className="skills">
        <h3 className='text-center'>Skills</h3>
        <p className="text-center">These are some of my web skills and technologies that I'm proficient in.</p>
        <section className="d-flex justify-content-center flex-wrap">
            <div className="item">
                <h5 className="html"><SiHtml5 /></h5>
                <h6>html5</h6>
            </div>
            <div className="item">
                <h5 className="css"><SiCss3 /></h5>
                <h6>css3</h6>
            </div>
            <div className="item">
                <h5 className="sass"><FaSass /></h5>
                <h6>sass</h6>
            </div>
            <div className="item">
                <h5 className="bootstrap"><FaBootstrap /></h5>
                <h6>bootstrap</h6>
            </div>
            <div className="item">
                <h5 className="tailwind"><SiTailwindcss /></h5>
                <h6>tailwind</h6>
            </div>
            <div className="item">
                <h5 className="js"><SiJavascript /></h5>
                <h6>javascript</h6>
            </div>
            <div className="item">
                <h5 className="jq"><SiJquery /></h5>
                <h6>jquery</h6>
            </div>
            <div className="item">
                <h5 className="react"><FaReact /></h5>
                <h6>react js</h6>
            </div>
            <div className="item">
                <h5 className="mui"><SiMui /></h5>
                <h6>material ui</h6>
            </div>
            <div className="item">
                <h5 className="next"><SiNextdotjs /></h5>
                <h6>next js</h6>
            </div>
            <div className="item">
                <h5 className="php"><SiPhp /></h5>
                <h6>php</h6>
            </div>
            <div className="item">
                <h5 className="laravel"><FaLaravel /></h5>
                <h6>laravel</h6>
            </div>
            <div className="item">
                <h5 className="mysql"><SiMysql /></h5>
                <h6>mysql</h6>
            </div>
        </section>
    </section>
  )
}
