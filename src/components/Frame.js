import React from "react";
import { Link } from "react-router-dom";
import "./Frame.css";

const Frame = (props) => {
  return (
    <>
      <Link className="frame__item__link">
        <figure>
          <img className="frame__item__img" alt="" src={props.src} />
        </figure>
      </Link>
    </>
  );
};

export default Frame;
