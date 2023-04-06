import landingImage from "../assets/Images/landing-image.jpg";
import FlexSection from "../components/FlexSection";
import LandingComponent from "../components/LandingComponent";
import Section from "../components/Section";
import ValuesSection from "../components/ValuesSection";
const Landing = () => {
  return (
    <>
      <LandingComponent text={""} img={landingImage} btn={true} />
      <Section />
      <FlexSection />
      <ValuesSection />
    </>
  );
};
export default Landing;
