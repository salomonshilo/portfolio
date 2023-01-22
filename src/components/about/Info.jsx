import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box about_icon">
        <i class="bx bx-award"></i>
        <h3 className="about_title"> Expérience</h3>
        <span className="about_subtitle"> 2 ans </span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase about_icon"></i>
        <h3 className="about_title"> Réalisations </h3>
        <span className="about_subtitle"> + 5 projets</span>
      </div>
    </div>
  );
}

export default Info