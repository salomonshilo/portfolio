import React from 'react'
import './about.css';
import AboutImg from "../../assets/Sans titre 17_20220930141047.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">A propos de moi</h2>
      <span className="section_subtitle">Mon introduction</span>
      <div className="about_container container grid">
        <img alt="" src={AboutImg} />
      </div>
    </section>
  );
}

export default About