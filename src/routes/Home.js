import Hero from "../component/Hero";
import Destination from "../component/Destination";
import Navbar from "../component/Navbar";
import Trip from "../component/Trip";
import Footer from "../component/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer/>
    </>
  );
}
