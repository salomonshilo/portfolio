import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Shilo</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              A propos
            </a>
          </li>

          <li>
            <a href="#porfolio" className="footer_link">
              Projets
            </a>
          </li>

          <li>
            <a href="#services" className="footer_link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="" className="footer_social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>

          <a href="" className="footer_social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>

          <a href="" className="footer_social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
              </div>
              <span className='footer_copy'>
                  &#169; ShiloDev, all rigths reserved
              </span>
      </div>
    </footer>
  );
}

export default Footer