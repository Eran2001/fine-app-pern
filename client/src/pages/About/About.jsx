import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <h1 className="text-4xl font-bold text-center mt-20 home">About Page</h1> */}
      <div className="font-sans">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/aboutus.jpg')",
          height: "600px", // Adjusting the height as per your original image
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1
            className="text-8xl font-bold h-40"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Us
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h3
          className="text-2xl font-bold text-center mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Fine.lk
        </h3>
        <div
          className="h-1 w-16 bg-blue-500 mx-auto mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        ></div>

        <p
          className="text-gray-700 mb-4"
          data-aos="fade-up" // Adding the fade-up animation to the paragraph
          data-aos-duration="1000" // Animation duration in ms
        >
          Welcome to Fine.lk, Sri Lanka&apos;s innovative platform dedicated to
          revolutionizing the way fines are managed and paid. Our mission is to
          provide a seamless, efficient, and transparent solution for
          individuals, law enforcement authorities, and intermediaries, making
          fine management simpler and more accessible. With Fine.lk, users can
          pay traffic fines online, report incidents conveniently, and stay
          updated with real-time traffic alerts.
        </p>
        <p
          className="text-gray-700 mb-4"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          We believe in bridging the gap between technology and public services
          by incorporating features that cater to both digital and non-digital
          users. Our integration with offline payment channels like post offices
          ensures inclusivity, enabling individuals across urban and rural areas
          to benefit from the platform. Fine.lk prioritizes user experience with
          a centralized dashboard for law enforcement to track compliance,
          secure payment gateways, and a robust dispute resolution mechanism to
          address grievances effectively.
        </p>
        <p
          className="text-gray-700 mb-4"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          As a proud advocate of digitization, Fine.lk is not just about
          simplifying processes but also contributing to the broader goal of
          modernizing public services in Sri Lanka. By fostering transparency
          and accessibility, we aim to empower citizens and authorities alike,
          ensuring a safer, more connected, and efficient system for all. Join
          us on our journey to make fine management smarter and stress-free!
        </p>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default About;
