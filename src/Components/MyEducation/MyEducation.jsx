import { Bounce, Fade } from "react-awesome-reveal";
import bracuLogo from "../../../src/assets/bracu_logo.png";

const MyEducation = () => {
  return (
    <div className="mb-[55px]" id="education">
      <Bounce>
        <h1 className="font-rubic text-center text-[44px] my-[55px]">
          My Education
        </h1>
      </Bounce>
      <div className="flex justify-center items-center">
        <Fade cascade damping={0.1} delay={700}>
          <div className="text-center">
            <h1 className="font-rubic text-[18px]">
              I'm Currently Studying in <br /> BRAC University.
            </h1>
            <p className="font-rubic text-[18px]">In 2nd Year</p>
          </div>
          {/* img div */}
          <div>
            <img
              className="w-[150px]"
              src={bracuLogo}
              alt="BRAC University Logo"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MyEducation;
