import "./index.css";
import Header from "../Header";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about">
        <div className="about__content">
          <h1 className="about__title">About Us</h1>
          <p className="about__paragraph">
            Actualize is a dynamic team rooted in the vibrant heart of
            innovation, where creativity meets purpose. We are passionate about
            human potential, design thinking, social impact, emerging tech, and
            great coffee. Our mission is to empower organizations and
            individuals to achieve their highest potential through engineering
            excellence, digital transformation, and consulting expertise.
          </p>
          <p className="about__paragraph">
            We thrive on collaboration, fresh ideas, and the energy that comes
            from building something meaningful together. Whether you're a
            strategist, creator, builder, or thinker—there’s space for you at
            Actualize.
          </p>
        </div>
        <div className="about__stats">
          <div className="about__stat-card">
            <h1 className="about__stat-value">10+</h1>
            <p className="about__stat-label">Years of Experience</p>
          </div>
          <div className="about__stat-card">
            <h1 className="about__stat-value">50+</h1>
            <p className="about__stat-label">Clients Worldwide</p>
          </div>
          <div className="about__stat-card">
            <h1 className="about__stat-value">100+</h1>
            <p className="about__stat-label">Projects Delivered</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
