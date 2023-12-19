import { useState } from 'react';
import '../styles/Education.css';
import EducationForm from './Forms/EducationForm';
import { Helmet } from 'react-helmet';

export default function Education({ formData, setFormData }) {
  let [downUp, setDownUp] = useState({ form: 0, schools: 0 });
  let [currentSchool, setCurrentSchool] = useState('');

  function handleEdit(index) {
    setCurrentSchool(index);
    downUp.form == 1
      ? setDownUp({ schools: downUp.schools + 1, form: downUp.form - 1 })
      : setDownUp({ schools: downUp.schools - 1, form: downUp.form + 1 });
  }

  function handleDownUp() {
    if (downUp.schools == 0 && downUp.form == 1) {
      setDownUp({ ...downUp, form: downUp.form - 1 });
    } else if (downUp.schools == 0 && downUp.form == 0) {
      setDownUp({ ...downUp, schools: downUp.schools + 1 });
    } else if (downUp.schools == 1 && downUp.form == 0) {
      setDownUp({ ...downUp, schools: downUp.schools - 1 });
    }
  }

  return (
    <div className="education">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="education-header-group">
        <h2 className="header">
          <i className="icon fa-solid fa-graduation-cap"></i> Education
        </h2>
        {downUp.schools == 1 || downUp.form == 1 ? (
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
        <EducationForm
          formData={formData}
          setFormData={setFormData}
          downUp={downUp}
          setDownUp={setDownUp}
          currentSchool={currentSchool}
        ></EducationForm>
      )}
      {downUp.schools == 1 && (
        <div className="education-content">
          {formData.education.map((school, index) => {
            return (
              <div key={school.name} className="educations">
                <h5 className="school-title">{school.name}</h5>
                <button className="editBtn" onClick={() => handleEdit(index)}>
                  <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            );
          })}
          <div className="add-education">
            <button
              className="add-education-button"
              onClick={() => handleEdit(formData.education.length)}
            >
              + Education
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
