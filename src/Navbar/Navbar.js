import React, { Component } from 'react';
import logo from '../images/logo.png';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faAngleDown,faSearch,faBars,faTimes} from  '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

class Navabar extends Component {

    state = {
        navbarOpen : false
    }
    
    toggleNavbar = () => {
        this.setState({navbarOpen : !this.state.navbarOpen})
    }

    render()
    {
        
        return(
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <ul className={this.state.navbarOpen ? 'menu active' : 'menu'}>
                    <li><a>HOME</a></li>
                    <li>
                        <a>PAGES <FontAwesomeIcon icon={faAngleDown} /></a>
                        <ul>
                            <li><a>PAGE 1</a></li>
                            <li><a>PAGE 2</a></li>
                            <li><a>PAGE 3</a></li>
                        </ul>
                    </li>
                    <li><a>ABOUT US</a></li>
                    <li><a>PROPERTIES</a></li>
                    <li><a>BLOG</a></li>
                    <li>
                        <a>MEGA MENU <FontAwesomeIcon icon={faAngleDown} /></a>
                        <ul>
                            <li><a>ITEM 1</a></li>
                            <li><a>ITEM 2</a></li>
                            <li><a>ITEM 3</a></li>
                        </ul>
                    </li>
                    <li><a>CONTACT</a></li>
                  
                </ul>
              
                <div className="btn-group">
                    <a className="search-icon"><FontAwesomeIcon icon={faSearch} /></a>
                    <FontAwesomeIcon onClick={this.toggleNavbar} className={this.state.navbarOpen ? 'menu-btn menu-active' : 'menu-btn'} icon={this.state.navbarOpen ? faTimes : faBars} />
                </div>
            </div>
        )    
    }
    
    
}

export default Navabar;