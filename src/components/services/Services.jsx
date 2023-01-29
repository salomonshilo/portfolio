import React, { useState } from 'react'
import './services.css'


const Services = () => {

  const [toggleState, setToggleState] = useState(0)


  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">Ce que j'offre</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            Voir plus
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services_modal-title">Product Designer </h3>
              <p className="services_modal-description">ici les lorems</p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    je developpe des interfaces utilisateur
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">je maquette des sites</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">je suis dynamique</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Ui/Ux <br /> Deigner
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            Voir plus
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services_modal-title">Ui/Ux designer</h3>
              <p className="services_modal-description">ici les lorems</p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    voici le premier paragraphe
                  </p>
                </li>

                <li className="services_modal-service services_liste">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    voici le premier paragraphe
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    voici le premier paragraphe
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>
            Voir plus
            <i
              className="uil uil-arrow-right 
            services_button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services_modal-title">Visual Deigner</h3>
              <p className="services_modal-description">ici les lorems</p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    voici le premier paragraphe
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    voici le premier paragraphe
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    voici le premier paragraphe
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services