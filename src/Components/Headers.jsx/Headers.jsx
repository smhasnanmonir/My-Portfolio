import resume from "../../../src/assets/Resume.pdf";
import download from "../../../src/assets/icons8-download-80.png";
const Headers = () => {
  const commonNavbar = (
    <>
      <nav>
        <ul className="flex gap-8 md:flex-row flex-col justify-between">
          <li
            onClick={() => {
              const anchor = document.querySelector("#about");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="text-xl font-rubic text-black font-thin cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => {
              const anchor = document.querySelector("#skills");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="text-xl font-rubic text-black font-thin cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => {
              const anchor = document.querySelector("#projects");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="text-xl font-rubic text-black font-thin cursor-pointer"
          >
            Recent Projects
          </li>
          <li
            onClick={() => {
              const anchor = document.querySelector("#education");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="text-xl font-rubic text-black font-thin cursor-pointer"
          >
            Education
          </li>
          <li className="text-xl font-rubic text-black font-thin cursor-pointer">
            Contact Me
          </li>
        </ul>
      </nav>
    </>
  );
  return (
    <div className="navbar z-[999] max-w-5xl bg-opacity-70 backdrop-blur-[25px] text-white fixed top-0 md:bg-transparent bg-blue-50">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-primary lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {commonNavbar}
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{commonNavbar}</ul>
      </div>
      <div className="navbar-end w-full">
        <a
          href={resume}
          target="blank"
          className="flex gap-2 items-center mt-2 text-black rounded-md p-3 md:w-[205px] w-full font-rubic hover:text-red-600 hover:cursor-pointer"
        >
          <img className="w-[25px]" src={download} alt="" />
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Headers;
