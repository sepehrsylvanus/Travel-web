import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
