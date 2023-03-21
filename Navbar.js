import React , {useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
import batstateu_logo from '../images/batstateu_logo.png';

function Navbar(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: 'white'}} >
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}  data-testid="menu-icon" />
                </Link>
            </div>
        </IconContext.Provider>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' >
                    <li className="navbar-toggle" >
                        <div className="logo" >
                            <img src={batstateu_logo} alt="logo of BatStateU" />
                            <h3>Research Management Services</h3>
                    <IconContext.Provider value={{color: 'gray'}} >
                        <div className='close'> 
                            <Link to="#" className='menu-bars' onClick={showSidebar} > 
                             <AiIcons.AiOutlineClose data-testid="close" />
                           </Link> 
                       </div>
                    </IconContext.Provider>
                       </div>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
             {/* </IconContext.Provider>  */}
        </>
    )
}
export default Navbar