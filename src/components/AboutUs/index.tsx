import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-us-section">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>
            Actualize is a dynamic team rooted in the vibrant heart of
            innovation, where creativity meets purpose. We are passionate about
            human potential, design thinking, social impact, emerging tech, and
            great coffee. Our mission is to empower organizations and
            individuals to achieve their highest potential through engineering
            excellence, digital transformation, and consulting expertise.
          </p>
          <p>
            We thrive on collaboration, fresh ideas, and the energy that comes
            from building something meaningful together. Whether you're a
            strategist, creator, builder, or thinker—there’s space for you at
            Actualize.
          </p>
        </div>
        <div className="about-us-stats">
          <div className="about-us-stats-card">
            <h1>10+</h1>
            <p>Years of Experience</p>
          </div>
          <div className="about-us-stats-card">
            <h1>50+</h1>
            <p>Clients Worldwide</p>
          </div>
          <div className="about-us-stats-card">
            <h1>100+</h1>
            <p>Projects Delivered</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
