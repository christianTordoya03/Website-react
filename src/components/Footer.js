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
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a>Instagram</a>
            <a href={url}>Facebook</a>
            <a>Youtube</a>
            <a>Twitter</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TCI&SI
              <i class="far fa-building" />
            </Link>
          </div>
          <small class="website-rights">TCI&SI © 2021</small>
          <div class="social-icons">
            <a href={url} class="social-icon-link facebook">
              <i class="fab fa-facebook-f" />
            </a>
            <a class="social-icon-link instagram">
              <i class="fab fa-instagram" />
            </a>
            <a class="social-icon-link youtube">
              <i class="fab fa-youtube" />
            </a>
            <a class="social-icon-link twitter">
              <i class="fab fa-twitter" />
            </a>
            <a class="social-icon-link twitter">
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
