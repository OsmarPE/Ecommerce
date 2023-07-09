import Cart from "../assets/icons/Cart"
import Close from "../assets/icons/Close"
import Logo from "../assets/icons/Logo"
import Menu from "../assets/icons/Menu"
import avatar from '../assets/images/image-avatar.png'
import { propsHeader } from "../types"

function Header({count,setshowCart,showCart}:propsHeader) {


  return (
    <header className='header'>
      <div className="container">
        <div className="header__body">
          <div className="header__left">
            <input className="header__toggle" type="checkbox" name="menu" id="header__menu" />
            <label className="header__menu" htmlFor="header__menu">
              <Menu />
            </label>
            <Logo />
            <div className="main-nav-bg"></div>
            <nav className='main-nav'>
              <label htmlFor="header__menu" className="main-nav__close">
                <Close />
              </label>
              <ul className="main-nav__list">
                <li className="main-nav__item"><a href="#" className="main-nav__link"> Collections</a></li>
                <li className="main-nav__item"><a href="#" className="main-nav__link"> Men</a></li>
                <li className="main-nav__item"><a href="#" className="main-nav__link"> Women</a></li>
                <li className="main-nav__item"><a href="#" className="main-nav__link"> About</a></li>
                <li className="main-nav__item"><a href="#" className="main-nav__link"> Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <a href="#" className="header__btn " onClick={() => setshowCart( !showCart ) }>
              <Cart />
              {
                count ? <span className="header__btn-count">{count}</span> : '' 
              }
              
            </a>
            <figure className='header__figure'>
              <img className='header__avatar' src={avatar} alt="image of person" />
            </figure>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header