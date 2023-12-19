import { useState } from 'react';
import '../styles/Experience.css';
import ExperienceForm from './Forms/ExperienceForm';
import { Helmet } from 'react-helmet';

export default function Experience({ formData, setFormData }) {
  let [downUp, setDownUp] = useState({ form: 0, experiences: 1 });
  let [currentExperience, setCurrentExperience] = useState('');

  function handleEdit(index) {
    setCurrentExperience(index);
    downUp.form == 1
      ? setDownUp({
          experiences: downUp.experiences + 1,
          form: downUp.form - 1,
        })
      : setDownUp({
          experiences: downUp.experiences - 1,
          form: downUp.form + 1,
        });
  }

  function handleDownUp() {
    if (downUp.experiences == 0 && downUp.form == 1) {
      setDownUp({ ...downUp, form: downUp.form - 1 });
    } else if (downUp.experiences == 0 && downUp.form == 0) {
      setDownUp({ ...downUp, experiences: downUp.experiences + 1 });
    } else if (downUp.experiences == 1 && downUp.form == 0) {
      setDownUp({ ...downUp, experiences: downUp.experiences - 1 });
    }
  }

  return (
    <div className="experience">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="experience-header-group">
        <h2 className="header">
          <i class="fa-solid fa-briefcase"></i> Experience
        </h2>
        {downUp.experiences == 1 || downUp.form == 1 ? (
          <img
            src="https://rmathr.github.io/cv-project/d529ba3bd8a0c3f53ac7.png"
            className="expand-icon"
            onClick={handleDownUp}
          />
        ) : (
          <img
            src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png"
            className="expand-icon"
            onClick={handleDownUp}
          />
        )}
      </div>
      {downUp.form == 1 && (
        <ExperienceForm
          formData={formData}
          setFormData={setFormData}
          downUp={downUp}
          setDownUp={setDownUp}
          currentExperience={currentExperience}
        ></ExperienceForm>
      )}
      {downUp.experiences == 1 && (
        <div className="experience-content">
          {formData.experience.map((experience, index) => {
            return (
              <div key={experience.role} className="experiences">
                <h5 className="experience-title">{experience.role}</h5>
                <button className="editBtn" onClick={() => handleEdit(index)}>
                  <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            );
          })}
          <div className="add-experience">
            <button
              className="add-experience-button"
              onClick={() => handleEdit(formData.experience.length)}
            >
              + Experience
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
