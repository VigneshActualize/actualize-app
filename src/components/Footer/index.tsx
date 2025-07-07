import "./index.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-one">
        <a href="/" className="footer-logo-link" style={{ color: "#000" }}>
          ACTUALIZE
        </a>
        <p className="footer-address">
          91 Springboard 6th Floor, Trifecta Adatto, 21, ITPL Main Road,
          Mahadevapura, Bengaluru – 560048
        </p>
        <div className="footer-socials footer-socials-inline">
          <a
            href="https://www.facebook.com/ActualizeCE/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer-social-link"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/actualize_india/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-social-link"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.75 2C5.126 2 3 4.126 3 6.75v10.5C3 19.874 5.126 22 7.75 22h8.5C18.874 22 21 19.874 21 17.25V6.75C21 4.126 18.874 2 16.25 2h-8.5Zm0 1.5h8.5c1.623 0 2.75 1.127 2.75 2.75v10.5c0 1.623-1.127 2.75-2.75 2.75h-8.5c-1.623 0-2.75-1.127-2.75-2.75V6.25C5 4.627 6.127 3.5 7.75 3.5Zm8.375 2.125a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/actualizece/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7 19H4v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75S4.534 4.232 5.5 4.232s1.75.784 1.75 1.75-.784 1.75-1.75 1.75zM20 19h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968V19h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601V19z" />
            </svg>
          </a>
        </div>
      </div>
      <ul className="footer-two">
        <h1 className="footer-logo-link">Industries</h1>
        <li className="footer-content">Heavy Industries</li>
        <li className="footer-content">Industrial Engineering</li>
        <li className="footer-content">Automotive Engineering</li>
        <li className="footer-content">Process Engineering</li>
      </ul>
      <ul className="footer-two">
        <h1 className="footer-logo-link">Services</h1>
        <li className="footer-content">Engineering Services</li>
        <li className="footer-content">Digital Transformation</li>
        <li className="footer-content">Staffing and Consulting</li>
        <hr />
      </ul>
      <ul className="footer-two">
        <h1 className="footer-logo-link">Locations</h1>
        <li className="footer-content">Ohio, USA</li>
        <li className="footer-content">Munich, Germeny</li>
        <li className="footer-content">Bengaluru</li>
        <li className="footer-content">Pune</li>
      </ul>
    </div>

    <div className="footer-bottom">
      <span className="footer-bottom-rights">
        © {new Date().getFullYear()} Actualize. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
