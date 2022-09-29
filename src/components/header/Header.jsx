import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);   
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav_logo'>
            Shilo
            </a>

            <div className={Toggle ? 'nav_menu show-menu' : 
            'nav_menu'}>

                <ul className='nav_list grid'>
                    <li className='nav_item'>
                        <a href='#home' className='nav_link  active-link'>
                            <i className='uil uil-estate nav_icon'> </i>
                            Accueil
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#about' className='nav_link'>
                            <i className='uil uil-user nav_icon'></i>
                            A propos
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#skills' className='nav_link'>
                            <i className='uil uil-file-alt nav_icon'></i>
                            Competences
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#services' className='nav_link'>
                            <i className='uil uil-briefcase-alt nav_icon'></i>
                            Services
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#portfolio' className='nav_link'>
                            <i className='uil uil-scenery nav_icon'></i>
                            Portfolio
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#contact' className='nav_link'>
                            <i className='uil uil-message nav_icon'></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav_close" onClick={() => showMenu (!Toggle)}></i>
            </div>
            <div className='nav_toggle' onClick={() => showMenu (!Toggle)}>
            <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  );
};

export default Header