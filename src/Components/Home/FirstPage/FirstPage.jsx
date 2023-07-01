import { Bounce, Fade, Slide } from "react-awesome-reveal";
import photo1 from "../../../assets/photo.png";
import photo2 from "../../../assets/Frameportfolio3.png";
import download from "../../../assets/icons8-download-80.png";
import resume from "../../../assets/Resume.pdf";
import bg from "../../../assets/endless-constellation.svg";
import "./Firstpage.css";
const FirstPage = () => {
  return (
    <div className="first-page-bg flex justify-center items-center md:px-0 px-[25px] md:flex-row flex-col-reverse mt-[75px]">
      {/* Text Content div */}
      <div className="w-full space-y-[7px] md:mb-0 mt-[45px]">
        <Fade cascade damping={0.5} duration={2000}>
          <h1 className="text-3xl leading-[35px] font-rubic">Hi,</h1>
          <h1 className="text-3xl leading-[35px] font-rubic">My Name is</h1>
          <p className="text-[42px] text-[#f94949] font-googleFont font-semibold">
            S.M Hasnan Monir
          </p>
          <p className="w-1/2 text-[18px] leading-[30px] font-rubic">
            I'm a 22 years old CSE Student and learning web developing is my new
            hobby.
          </p>
          <a
            href={resume}
            target="blank"
            className="flex gap-2 items-center mt-2 bg-red-300 rounded-md p-3 w-[205px] font-rubic hover:text-white hover:cursor-pointer"
          >
            <img className="w-[25px]" src={download} alt="" />
            <button>Download Resume</button>
          </a>
        </Fade>
      </div>
      {/* Photo div */}
      <div>
        <div className="md:block hidden">
          <Slide damping={0.5} delay={2000} triggerOnce={true}>
            <img className="md:w-[774px]" src={photo2} alt="My Image" />
          </Slide>
        </div>
        <div className="md:hidden block">
          <Slide damping={0.5} triggerOnce={true}>
            <img className="md:w-[774px]" src={photo2} alt="My Image" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
