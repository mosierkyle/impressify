import { useState } from 'react';
import '/Users/kylemosier/repos/CV-application/src/styles/EducationForm.css';

export default function EducationForm({
  formData,
  setFormData,
  downUp,
  setDownUp,
  currentSchool,
}) {
  const [schoolName, setSchoolName] = useState(
    currentSchool != formData.education.length
      ? formData.education[currentSchool].name
      : ''
  );
  const [schoolMajor, setSchoolMajor] = useState(
    currentSchool != formData.education.length
      ? formData.education[currentSchool].major
      : ''
  );
  const [schoolStart, setSchoolStart] = useState(
    currentSchool != formData.education.length
      ? formData.education[currentSchool].start
      : ''
  );
  const [schoolEnd, setSchoolEnd] = useState(
    currentSchool != formData.education.length
      ? formData.education[currentSchool].end
      : ''
  );
  const [schoolLocation, setSchoolLocation] = useState(
    currentSchool != formData.education.length
      ? formData.education[currentSchool].location
      : ''
  );

  function handleSchoolName(e) {
    setSchoolName(e.target.value);
  }

  function handleSchoolMajor(e) {
    setSchoolMajor(e.target.value);
  }

  function handleSchoolStart(e) {
    setSchoolStart(e.target.value);
  }

  function handleSchoolEnd(e) {
    setSchoolEnd(e.target.value);
  }
  function handleSchoolLocation(e) {
    setSchoolLocation(e.target.value);
  }

  function handleSave() {
    const updatedEducation = [...formData.education];
    updatedEducation[currentSchool] = {
      name: schoolName,
      major: schoolMajor,
      start: schoolStart,
      end: schoolEnd,
      location: schoolLocation,
    };
    setFormData({ ...formData, education: updatedEducation });
    setSchoolName('');
    setSchoolMajor('');
    setSchoolEnd('');
    setSchoolStart('');
    setSchoolLocation('');
    setDownUp({ ...downUp, form: downUp.form - 1 });
  }

  function handleCancel() {
    setDownUp({ ...downUp, form: downUp.form - 1 });
  }

  function handleDelete() {
    if (currentSchool != 0) {
      const updatedEducation = [...formData.education];
      setFormData({
        ...formData,
        education: updatedEducation.splice(currentSchool, 1),
      });
    } else {
      setFormData({
        education: [],
      });
    }
    setDownUp({ schools: downUp.schools + 1, form: downUp.form - 1 });
  }

  return (
    <form className="education-form" onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <label className="input-label">School</label>
        <input
          className="input"
          placeholder="Enter School / University"
          value={schoolName}
          onChange={handleSchoolName}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Degree</label>
        <input
          className="input"
          placeholder="Enter Degree / Field of Study"
          value={schoolMajor}
          onChange={handleSchoolMajor}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Start Date</label>
        <input
          className="input"
          placeholder="Enter Start Date"
          value={schoolStart}
          onChange={handleSchoolStart}
        />
      </div>
      <div className="input-group">
        <label className="input-label">End Date</label>
        <input
          placeholder="Enter End Date"
          className="input"
          value={schoolEnd}
          onChange={handleSchoolEnd}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Location</label>
        <input
          placeholder="Enter Location"
          className="input"
          value={schoolLocation}
          onChange={handleSchoolLocation}
        />
      </div>
      <div className="button-div">
        <button className="deleteBtn" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <div className="rightButtons">
          <button className="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
