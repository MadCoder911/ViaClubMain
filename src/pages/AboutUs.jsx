import LandingComponent from "../components/LandingComponent";

import landingImage from "../assets/Images/aboutUs-page-image.jpg";
const AboutUs = () => {
  return (
    <LandingComponent text={"Our History"} img={landingImage} btn={false} />
  );
};
export default AboutUs;
