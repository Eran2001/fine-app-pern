import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card/Card";
import MyMap from "../../components/MyMap/MyMap";
import Download from "../../components/Download/Download";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import FeedBack from "../../components/FeedBack/FeedBack";
import OurServices from "../../components/OurServices/OurServices";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Clear Fine", "Save Time"];
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIn(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".hero-text, .hero-text2, .hero-text3, .hero-text-new"
    );

    const handleScroll = () => {
      if (window.scrollY > 50) {
        elements.forEach((element) => element.classList.add("hidden"));
      } else {
        elements.forEach((element) => element.classList.remove("hidden"));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="pt-16 hero-div">
      <Navbar />
      <div className="hero-text-main">
        <div className="image-container">
          <img src="/hero.jpg" className="hero-img" alt="Hero" />
        </div>
        <h1 className={`hero-text ${slideIn ? 'slide-in' : ''}`}>
          Fine.lk <span>{texts[textIndex]}</span>
        </h1>
        <h2 className={`hero-text2 ${slideIn ? 'slide-in' : ''}`}>Fine.lk simplifies the process of managing traffic fines for citizens, </h2>
        <h2 className={`hero-text-new ${slideIn ? 'slide-in' : ''}`}>officers, and post offices</h2>
        <p className={`hero-text3 ${slideIn ? 'slide-in' : ''}`}>
        Pay, report, and resolve issues conveniently while staying informed with real-time updates..
        </p>
      </div>
      <OurServices />
      <Card />
      <FeedBack />
      {/* <UserReview /> */}
      <Download />
      <MyMap />
      <Footer />
    </div>
  );
};

export default Home;