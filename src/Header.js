import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      
      
        <img
          className="header__logo"
          src="https://w7.pngwing.com/pngs/399/756/png-transparent-tinder-logo-computer-icons-tinder-angle-logo-magenta-thumbnail.png"
          alt="tinder logo"
        />
      
      <IconButton><ForumIcon fontSize="large" className="header__icon" /></IconButton>
    </div>
  );
}

export default Header;
