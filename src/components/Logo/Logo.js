import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import face from "../../apps/assets/images/face.png";

export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa3">
          <img src={face} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}
