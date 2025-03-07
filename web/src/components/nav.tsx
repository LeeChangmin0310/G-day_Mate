import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button.tsx";
import "../App.css";

export default function Nav() {
  const [hover, setHover] = useState(false);
  const [currentFocus, setCurrentFocus] = useState("");

  return (
    <div
      style={{
        position: "fixed",
        top: " 0",
        width: "100%",
        zIndex: "2",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: hover ? "2px solid #555" : "none",
          backgroundColor: "rgba(255,255,255,0.4)",
        }}
      >
        <div style={{ position: "absolute", left: "30px" }}>
          <Link to="/">
            <img src="../img/small_logo.png" style={{ width: "120px" }} />
          </Link>
        </div>
        <div style={{ width: "500px", display: "flex" }}>
          <div className="nav_text">About</div>
          <div className="nav_text">Project</div>
          <div className="nav_text">Contact</div>
          <div className="nav_text">Help</div>
        </div>

        <div style={{ position: "absolute", right: "30px" }}>
          <div className="nav_text" style={{ fontFamily: "Pretendard-Bold" }}>
            Log In/Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}
