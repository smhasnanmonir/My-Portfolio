import { Bounce, Fade, Slide } from "react-awesome-reveal";
import photo1 from "../../../assets/photo.png";
const FirstPage = () => {
  return (
    <div className="flex justify-center items-center md:px-0 px-[25px] md:flex-row flex-col-reverse mt-[75px]">
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
        </Fade>
      </div>
      {/* Photo div */}
      <div>
        <div className="md:block hidden">
          <Slide damping={0.5} delay={2000}>
            <img className="md:w-full" src={photo1} alt="My Image" />
          </Slide>
        </div>
        <div className="md:hidden block">
          <Slide damping={0.5}>
            <img className="md:w-full" src={photo1} alt="My Image" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
