import {logo} from "../img/svgIcons";
import "../styles/header.css"
import SocialLinks from "./SocialLinks";
import {useState} from "react";

const Header = () => {
    const [menuState, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(state => !state)
    }
  return(
      <header className={`${menuState ? "menu-active" : ""}`}>
          <a href="/" className={"logo-link"}>
              {logo}
          </a>
          <SocialLinks/>
          <nav className={"main-menu"}>
              <ul>
                  <li><a href="/">lorem ipsum</a></li>
                  <li><a href="/">Dolor sit</a></li>
                  <li><a href="/">Consectetur</a></li>
                  <li><a href="/">Adipiscing</a></li>
                  <li><a href="/">Elit</a></li>
                  <li><a href="/">Etiam rutrum</a></li>
              </ul>
          </nav>
          <div className="menu-toggle burger" onClick={toggleMenu}>
              <div className="burger-bar"/>
              <div className="burger-bar"/>
              <div className="burger-bar"/>
          </div>
      </header>
  )
}

export default Header