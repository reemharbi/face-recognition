import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "../../apps/assets/images/face.png";

export default function Logo() {
  return (
    <div className="ma5 mt0">
      <Tilt
        className="Tilt br4 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa1">
          <img src={face} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}
