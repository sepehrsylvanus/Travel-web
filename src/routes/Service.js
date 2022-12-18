import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../component/Footer";
import Trip from '../component/Trip'

export default function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
