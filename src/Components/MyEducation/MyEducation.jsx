import bracuLogo from "../../../src/assets/bracu_logo.png";

const MyEducation = () => {
  return (
    <div className="mb-[55px]">
      <h1 className="font-rubic text-center text-[44px] my-[55px]">
        My Education
      </h1>
      <div className="flex justify-center items-center">
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
      </div>
    </div>
  );
};

export default MyEducation;
