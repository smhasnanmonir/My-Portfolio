import photo1 from "../../../assets/photo.png";
const FirstPage = () => {
  return (
    <div className="flex justify-center items-center md:px-0 px-[25px] md:flex-row flex-col-reverse">
      {/* Text Content div */}
      <div className="w-full space-y-[7px] md:mb-0 mt-[45px]">
        <h1 className="text-3xl leading-[35px] font-rubic">Hi,</h1>
        <h1 className="text-3xl leading-[35px] font-rubic">My Name is</h1>
        <p className="text-[42px] text-[#f94949] font-googleFont font-semibold">
          S.M Hasnan Monir
        </p>
        <p className="w-1/2 text-[18px] leading-[30px] font-rubic">
          I'm a 22 years old CSE Student and learning web developing is my new
          hobby.
        </p>
      </div>
      {/* Photo div */}
      <div>
        <img className="md:w-full" src={photo1} alt="My Image" />
      </div>
    </div>
  );
};

export default FirstPage;