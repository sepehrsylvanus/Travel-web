import "./HeroStyles.css";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <img
          alt="heroImg"
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
        />
        <div className="hero-text">
          <h1>Your Journey Your Story</h1>
          <p>Choose Your Favorite Destination</p>
          <a href="/">Travel Plan</a>
          {/* 1:33:16 */}
        </div>
      </div>
    </>
  );
}
