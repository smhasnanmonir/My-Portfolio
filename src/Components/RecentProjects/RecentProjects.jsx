import { Bounce, Fade } from "react-awesome-reveal";
import summerSchool from "../../../src/assets/summerSchool.png";
const RecentProjects = () => {
  return (
    <div className="md:px-[0px] px-[25px]">
      <Bounce>
        <h1 className="text-center font-googleFont text-[45px] my-[55px]">
          Recent Projects
        </h1>
      </Bounce>
      <div className=" grid md:grid-cols-2 gap-[16px] grid-cols-1">
        {/* Project 1 */}
        <div className="rounded-md project-div">
          <Fade cascade damping={0.25} duration={2500}>
            <img
              className="project-img w-fit"
              src={summerSchool}
              alt="Summer School Image"
            />
            <h1 className="mt-2 font-rubic text-[22px] font-light">
              Summer School
            </h1>
            <div className="md:ml-[25px]">
              <ul
                style={{ listStyleType: "lower-roman" }}
                className="font-rubic font-light space-y-2"
              >
                <li className="font-rubic">Students can buy courses.</li>
                <li className="font-rubic">Instructors can add courses.</li>
                <li className="font-rubic">
                  Admins can deny or approve courses.
                </li>
              </ul>
            </div>
            <div className="links flex gap-1 text-left">
              <button
                onClick={() =>
                  window.open("https://cosummerschool.web.app/", "_blank")
                }
                className="p-3 bg-blue-500 text-white rounded-md mt-3 hover:bg-blue-700"
              >
                Website
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/smhasnanmonir/Full-Stack-School-Website.git",
                    "_blank"
                  )
                }
                className="p-3 bg-blue-500 text-white rounded-md mt-3 hover:bg-blue-700"
              >
                Client Github
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/smhasnanmonir/school-webiste-node-server-.git",
                    "_blank"
                  )
                }
                className="p-3 bg-blue-500 text-white rounded-md mt-3 hover:bg-blue-700"
              >
                Server Github
              </button>
            </div>
          </Fade>
        </div>
        {/* Project 2 */}
        <div className="rounded-md project-div">
          <Fade cascade damping={0.25} duration={3500}>
            <img
              className="project-img w-fit"
              src={summerSchool}
              alt="Summer School Image"
            />
            <h1 className="mt-2 font-rubic text-[22px] font-light">
              Summer School
            </h1>
            <div className="md:ml-[25px]">
              <ul
                style={{ listStyleType: "lower-roman" }}
                className="font-rubic font-light space-y-2"
              >
                <li className="font-rubic">Students can buy courses.</li>
                <li className="font-rubic">Instructors can add courses.</li>
                <li className="font-rubic">
                  Admins can deny or approve courses.
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
