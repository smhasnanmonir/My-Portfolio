import MyEducation from "../../MyEducation/MyEducation";
import RecentProjects from "../../RecentProjects/RecentProjects";
import FirstPage from "../FirstPage/FirstPage";
import SkillsPage from "../SkillsPage/SkillsPage";

const Home = () => {
  return (
    <div>
      <FirstPage></FirstPage>
      <SkillsPage></SkillsPage>
      <RecentProjects></RecentProjects>
      <MyEducation></MyEducation>
    </div>
  );
};

export default Home;
