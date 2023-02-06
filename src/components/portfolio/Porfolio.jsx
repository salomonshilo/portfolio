import React from 'react'
import './porfolio.css'

import Img1 from "../../assets/image2Pc.jpg";
import img2 from "../../assets/imagePc.webp"

const Porfolio = () => {
  return (
    <section className="porfolio section" id="porfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Ce que j'ai réalisé</span>

      <div className="contain_realisation">
        <div className="my_realisation">
          <img alt="" src={img2} className="image_realisation" />
          <p>Clone spotify</p>
          <span className=" services_button">
            <a href="https://github.com/salomonshilo/" className="text_github">
              
              Voir sur github
            </a>
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>
        </div>

        <div className="my_realisation">
          <img alt="" src={Img1} className="image_realisation" />
          <p>chat App</p>
          <span className="text_realisation services_button">
            <a href="https://github.com/salomonshilo/" className="text_github">
              Voir sur github
            </a>
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>
        </div>

        <div className="my_realisation">
          <img alt="" src={img2} className="image_realisation" />
          <p>Landing page</p>
          <span className="text_realisation services_button">
            <a href="https://github.com/salomonshilo/" className="text_github">
              Voir sur github
            </a>
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>
        </div>
      </div>

      <div className="contain_realisation">
        <div className="my_realisation">
          <img alt="" src={Img1} className="image_realisation" />
          <p>Quiz App</p>
          <span className="text_realisation services_button">
            <a href="https://github.com/salomonshilo/" className="text_github">
              Voir sur github
            </a>
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>
        </div>

        <div className="my_realisation">
          <img alt="" src={img2} className="image_realisation" />
          <p>Responsive porfolio</p>
          <span className="text_realisation services_button">
            <a href="https://github.com/salomonshilo/" className="text_github">
              Voir sur github
            </a>
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>
        </div>

        <div className="my_realisation">
          <img alt="" src={Img1} className="image_realisation" />
          <p>Site maison jungle</p>
          <span className="text_realisation services_button">
            <a href="https://github.com/salomonshilo/" className="text_github">
              {" "}
              Voir sur github
            </a>
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Porfolio