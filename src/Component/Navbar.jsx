import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar(){
   const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
   return(
      <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items"><Link to='/'>Home</Link></li>
      <li className="items"><Link to='/farm'>Hydroponic Farm</Link></li>
      <li className="items"><Link to='/buyer'>Selling Product</Link></li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">Menu</button>
    </nav>
   )
}

export default Navbar;