import { Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#fa7575] p-5">
      <Slide duration={1700} damping={0.25}>
        <h1 className="text-xl text-center text-white">
          Thank you for visiting my website.
        </h1>
      </Slide>
    </div>
  );
};

export default Footer;
