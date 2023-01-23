import React from 'react'

const Frontend = () => {
    return (
      <div className="skills_content">
        <h3 className="skills_title">Développeur Frontend</h3>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name"> HTML</h3>
                <span className="skills_level">Itermédiaire</span>
              </div>
            </div>
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">CSS</h3>
                <span className="skills_level">Intermédiaire</span>
              </div>
            </div>
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">JAVASCRIPT</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>

          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">GIT</h3>
                <span className="skills_level">Basique</span>
              </div>
            </div>
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">BOOSTRAP</h3>
                <span className="skills_level">Intermédiaire</span>
              </div>
            </div>
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">REACT</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Frontend