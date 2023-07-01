import html from "../../../assets/html-1.svg";
import css from "../../../assets/css-3.svg";
import bootstrap from "../../../assets/icons8-bootstrap.svg";
import tailwind from "../../../assets/icons8-tailwind-css.svg";
import javascript from "../../../assets/logo-javascript.svg";
import react from "../../../assets/react-2.svg";
import node from "../../../assets/icons8-node-js.svg";
import mongodb from "../../../assets/icons8-mongodb.svg";
import { Fade } from "react-awesome-reveal";

const SkillsPage = () => {
  return (
    <div className="grid place-items-center mb-[50px] w-full">
      <h1 className="text-center md:my-[55px] my-[45px] font-rubic text-[45px]">
        My Skills
      </h1>
      <div className="grid md:grid-cols-4 gap-3 md:w-full place-items-center grid-cols-2 md:px-[0px] px-[25px]">
        <Fade cascade damping={0.1} duration={1500}>
          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={html}
              alt="html svg"
            />
            <p className="text-[18px] font-googleFont">HTML</p>
          </div>

          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={css}
              alt="css svg"
            />
            <p className="text-[18px] font-googleFont">CSS</p>
          </div>
          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={bootstrap}
              alt="bootstrap svg"
            />
            <p className="text-[18px] font-googleFont">BootStrap</p>
          </div>
          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={tailwind}
              alt="tailwind svg"
            />
            <p className="text-[18px] font-googleFont">Tailwind</p>
          </div>
          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={javascript}
              alt="javascript svg"
            />
            <p className="text-[18px] font-googleFont">JavaScript</p>
          </div>
          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={react}
              alt="html svg"
            />
            <p className="text-[18px] font-googleFont">React</p>
          </div>
          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={node}
              alt="Node svg"
            />
            <p className="text-[18px] font-googleFont">NodeJs</p>
          </div>
          <div className="skill-div">
            <img
              className="w-[35px] mx-auto font-rubic"
              src={mongodb}
              alt="Node svg"
            />
            <p className="text-[18px] font-googleFont">MongoDB</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SkillsPage;
