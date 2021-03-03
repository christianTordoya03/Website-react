import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Frame from "./Frame";

function Footer() {
  const url = "https://www.facebook.com/TordoyaCapital";
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Para mayor información puede contactarse a los siguientes números que
          figuran en el código QR
        </p>
        <Frame src="images/frame.png" text="!" />
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a>
            <a href={url}>Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TCI&SI
              <i class="far fa-building" />
            </Link>
          </div>
          <small className="website-rights">TCI&SI © 2021</small>
          <div className="social-icons">
            <a href={url} class="social-icon-link facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="/" className="social-icon-link instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="/" className="social-icon-link youtube">
              <i className="fab fa-youtube" />
            </a>
            <a href="/" className="social-icon-link twitter">
              <i className="fab fa-twitter" />
            </a>
            <a href="/" className="social-icon-link twitter">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
