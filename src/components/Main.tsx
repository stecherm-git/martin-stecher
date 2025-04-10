import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="../../images/profile_picture_bg_removed.png" alt="Avatar"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/stecherm-git" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/martin-stecher-3408a3195" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Martin Stecher</h1>
          <h2>Neuromorphic Computing</h2>

          <div className="mobile_social_icons">
            <a href="https://github.com/stecherm-git" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/martin-stecher-3408a3195" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;