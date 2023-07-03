import ContactMe from "../../ContactMe/ContactMe";
import Footer from "../../Footer/Footer";
import Headers from "../../Headers.jsx/Headers";
import MyEducation from "../../MyEducation/MyEducation";
import RecentProjects from "../../RecentProjects/RecentProjects";
import FirstPage from "../FirstPage/FirstPage";
import SkillsPage from "../SkillsPage/SkillsPage";
import "./Home.css";

const Home = () => {
  return (
    <div className="md:max-w-5xl mx-auto">
      <Headers></Headers>
      <FirstPage></FirstPage>
      <SkillsPage></SkillsPage>
      <RecentProjects></RecentProjects>
      <MyEducation></MyEducation>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
