import LandingComponent from "../components/LandingComponent";
import landingImage from "../assets/Images/contactUs-page-image.jpg";
const ContactUs = () => {
  return (
    <LandingComponent
      text={"CONTACT US"}
      addText={"Any question or remarks? Just write us a message!"}
      img={landingImage}
      btn={false}
    />
  );
};
export default ContactUs;
