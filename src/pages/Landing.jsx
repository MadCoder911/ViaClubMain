import landingImage from "../assets/Images/landing-image.jpg";
import FlexSection from "../components/FlexSection";
import LandingComponent from "../components/LandingComponent";
import Section from "../components/Section";
import ValuesSection from "../components/ValuesSection";
import WhyUs from "../components/WhyUs";
const Landing = () => {
  return (
    <>
      <LandingComponent text={""} img={landingImage} btn={true} />
      <Section />
      <FlexSection />
      <ValuesSection />
      <WhyUs />
    </>
  );
};
export default Landing;
