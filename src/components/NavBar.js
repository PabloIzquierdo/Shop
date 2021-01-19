import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../css/main.css';
import { IconContext } from 'react-icons';

function NavBar(){
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <div className='nav'>
              <Link to='#' className='nav__menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
          </div>
          <nav className={sidebar ? 'nav__menu nav__menu-active' : 'nav__menu'}>
            <ul className='nav__menu-items' onClick={showSidebar}>
              <li className='nav__menu-toggle'>
                <Link to='#' className='nav__menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return(
                    <li key={index} className="nav__menu-link">
                      <Link to={item.path}>
                        {item.icon}
                        <span className="nav__menu-title">{item.title}</span>
                      </Link>
                    </li>
                )
              })}
            </ul>
          </nav>
          </IconContext.Provider>
        </>
    );
}

export default NavBar;