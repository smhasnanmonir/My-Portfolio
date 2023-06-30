import photo1 from "../../../assets/photo.png";
const FirstPage = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Text Content div */}
      <div className="w-full space-y-[7px]">
        <h1 className="text-3xl leading-[35px] font-rubic">Hi,</h1>
        <h1 className="text-3xl leading-[35px] font-rubic">My Name is</h1>
        <p className="text-[42px] font-googleFont font-semibold">
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
