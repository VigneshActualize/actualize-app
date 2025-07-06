import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Join Us</h1>
          <p>
            Join us Actualize is rooted in the vibrant heart of innovation,
            where creativity meets purpose. We're a dynamic team passionate
            about human potential, design thinking, social impact, emerging
            tech, and great coffee. Curious about becoming part of our journey?
            <hr style={{ border: "none" }} />
            We thrive on collaboration, fresh ideas, and the energy that comes
            from building something meaningful together. Whether you're a
            strategist, creator, builder, or thinker—there’s space for you at
            Actualize.
            <span className="contact-header-span">Discover more here</span>
          </p>
        </div>
        <div className="contact-middle">
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-description">
            We'd love to hear from you! Please fill out the form below and our
            team will get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your Message"
              />
            </div>
            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
