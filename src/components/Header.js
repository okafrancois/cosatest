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
          <div className="menu-toggle burger" onClick={toggleMenu}>
              <div className="burger-bar"/>
              <div className="burger-bar"/>
              <div className="burger-bar"/>
          </div>
          <nav className={"main-menu"}>
              <ul className={"navigation"}>
                  <li><a href="/">lorem ipsum</a></li>
                  <li><a href="/">Dolor sit</a></li>
                  <li><a href="/">Consectetur</a></li>
                  <li><a href="/">Adipiscing</a></li>
                  <li><a href="/">Elit</a></li>
                  <li><a href="/">Etiam rutrum</a></li>
              </ul>
              <div className="ext-links">
                  <a href="/">Contact</a>
                  <SocialLinks/>
              </div>
          </nav>
      </header>
  )
}

export default Header