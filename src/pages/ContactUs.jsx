import LandingComponent from "../components/LandingComponent";
import landingImage from "../assets/Images/contactUs-page-image.jpg";
import FormCompononet from "../components/FormCompononet";
const ContactUs = () => {
  return (
    <>
      <LandingComponent
        text={"CONTACT US"}
        addText={"Any question or remarks? Just write us a message!"}
        img={landingImage}
        btn={false}
      />
      <FormCompononet />
    </>
  );
};
export default ContactUs;
