import "./ContactFormStyles.css";

export default function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input type='text' placeholder="Name" />
        <input type='email' placeholder="Email" />
        <input type='text' placeholder="Subject" />
        <textarea placeholder="Message" rows="4" />
        <button>Send Message</button>
      </form>
    </div>
  );
}
