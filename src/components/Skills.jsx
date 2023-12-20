import { useState } from 'react';
import '../styles/Skills.css';
import SkillsForm from './Forms/SkillsForm';
import { Helmet } from 'react-helmet';

export default function Skills({ formData, setFormData }) {
  let [downUp, setDownUp] = useState({ form: 0, skills: 0 });
  let [currentSkill, setCurrentSkill] = useState('');

  function handleEdit(index) {
    setCurrentSkill(index);
    downUp.form == 1
      ? setDownUp({
          skills: downUp.skills + 1,
          form: downUp.form - 1,
        })
      : setDownUp({
          skills: downUp.skills - 1,
          form: downUp.form + 1,
        });
  }

  function handleDownUp() {
    if (downUp.skills == 0 && downUp.form == 1) {
      setDownUp({ ...downUp, form: downUp.form - 1 });
    } else if (downUp.skills == 0 && downUp.form == 0) {
      setDownUp({ ...downUp, skills: downUp.skills + 1 });
    } else if (downUp.skills == 1 && downUp.form == 0) {
      setDownUp({ ...downUp, skills: downUp.skills - 1 });
    }
  }

  return (
    <div className="skill">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="skill-header-group">
        <h2 className="header">
          <i className="fa-solid fa-lightbulb"></i> Skills
        </h2>
        {downUp.skills == 1 || downUp.form == 1 ? (
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
        <SkillsForm
          formData={formData}
          setFormData={setFormData}
          downUp={downUp}
          setDownUp={setDownUp}
          currentSkill={currentSkill}
        ></SkillsForm>
      )}
      {downUp.skills == 1 && (
        <div className="skill-content">
          {formData.skills.map((skill, index) => {
            return (
              <div key={skill} className="skills">
                <h5 className="skill-title">{skill}</h5>
                <button className="editBtn" onClick={() => handleEdit(index)}>
                  <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            );
          })}
          <div className="add-skill">
            <button
              className="add-skill-button"
              onClick={() => handleEdit(formData.skills.length)}
            >
              + Skill
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
