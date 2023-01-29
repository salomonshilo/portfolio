import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jkhpcfj",
        "template_sfc0ouv",
        form.current,
        "JcCnT6SPKviPAaauS"
      )
    e.target.reset()
  };







  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact</h2>
      <span className="section_subtitle">Me contacter</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Me parler</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">Shilomavonga@gmail.com</span>
              <a
                href="mailto:shilomavonga@gmail.com"
                className="contact_button"
              >
                Ecrivez moi
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>
              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+243 82 83 68 024</span>
              <a
                href="https://api.whatsapp.com/send?
              phone=622144089&text=hello, more inforlation!"
                className="contact_button"
              >
                Ecrivez moi
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-linkedin contact_card-icon"></i>
              <h3 className="contact_card-title">Linkdin</h3>
              <span className="contact_card-data">Mon compte linkdin ici</span>
              <a
                href="https://www.linkedin.com/in/shilo-mavonga-817968237/"
                className="contact_button"
              >
                Ecrivez moi
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Ecrivez votre projet</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Nom </label>

              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="entrer votre nom"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Mail </label>

              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="entrer votre email"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Projet </label>

              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Ecrivez votre projet"
              ></textarea>
            </div>

            <button onClick={() => sendEmail} className="button button--flex">
              Envoyez
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
