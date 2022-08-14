import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="www.facebook.com">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="www.facebook.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="www.facebook.com">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="www.facebook.com">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="www.facebook.com">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Zhyne</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Motivated Dev 🟢",
                    2000,
                    "Front-end Developer 💻",
                    2000,
                    "React.Js Developer ⚛️",
                    2000,
                    "Java Developer ☕",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Experienced in Development of application with Front and back
                end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="CV - Zhyne.pdf" download="CV - Zhyne.pdf">
              <button className="btn highlighted-btn">Get CV</button>
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
}
