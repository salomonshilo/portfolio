import React from 'react'
import './about.css';
import AboutImg from "../../assets/Sans titre 17_20220930141047.png";
import CV from "../../assets/SHILO MAVONGA CV-1.pdf"
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">A propos de moi</h2>
      <span className="section_subtitle">Mon introduction</span>
      <div className="about_container container grid">
              <img className='about_img' alt=""  />
              <div className='about_data'>
                  <Info />
                  <p className='about_descrption'>
                      je suis shilo mavonga developpeur passioné je suis né à kinshasa i
                      speak english and i hate michel 
                  </p>
                  <a className='button button--flex' download = '' href={CV} > Télécharger le CV</a>
              </div>
      </div>
    </section>
  );
}

export default About