import logo from '../img/cosatest-Logo.svg'
import "../styles/header.css"

const Header = () => {
  return(
      <header>
          <a href="/">
              <img src={logo} alt=""/>
          </a>
      </header>
  )
}

export default Header