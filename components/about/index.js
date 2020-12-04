import AboutBanner from "./aboutBanner";
import UniqueValue from "./uniqueValue";
import Partners from "./partners";
import CustomerReviews from "./customerReviews";

const About = () => {
  return (
    <>
      <div className="container mx-auto pt-5 pb-8 text-3xl font-ubuntu text-dark text-center">
        <span className="font-light">About</span> <span className="font-medium">Us</span>
      </div>
      <AboutBanner />
      <UniqueValue />
      <hr className="my-5 opacity-10 bg-dark" />
      <Partners />
      <CustomerReviews />
    </>
  );
}

export default About;
