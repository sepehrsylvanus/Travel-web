import Hero from "../component/Hero"
import Navbar from "../component/Navbar"
import AboutImg from '../assets/2.jpg'
import Footer from "../component/Footer"
import ContactForm from "../component/ContactForm"
export default function Contact (){
  return(
  <>
    <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>

  )
  }