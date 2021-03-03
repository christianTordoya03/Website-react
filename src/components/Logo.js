import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {
  return (
    <>
      <Link className="logo__item__link">
        <figure>
          <img className="logo__item__img" alt="" src={props.src} />
        </figure>
      </Link>
    </>
  );
};

export default Logo;
