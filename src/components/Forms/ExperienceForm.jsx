import { useState } from 'react';
import '/Users/kylemosier/repos/CV-application/src/styles/ExperienceForm.css';

export default function EducationForm({
  formData,
  setFormData,
  downUp,
  setDownUp,
  currentExperience,
}) {
  const [experienceRole, setExperienceRole] = useState(
    currentExperience != formData.experience.length
      ? formData.experience[currentExperience].role
      : ''
  );
  const [experienceCompany, setExperienceCompany] = useState(
    currentExperience != formData.experience.length
      ? formData.experience[currentExperience].company
      : ''
  );
  const [experienceDetails, setExperienceDetails] = useState(
    currentExperience != formData.experience.length
      ? formData.experience[currentExperience].details
      : ''
  );

  const [experienceStart, setExperienceStart] = useState(
    currentExperience != formData.experience.length
      ? formData.experience[currentExperience].start
      : ''
  );
  const [experienceEnd, setExperienceEnd] = useState(
    currentExperience != formData.experience.length
      ? formData.experience[currentExperience].end
      : ''
  );
  const [experienceLocation, setExperienceLocation] = useState(
    currentExperience != formData.education.length
      ? formData.experience[currentExperience].location
      : ''
  );

  function handleExperienceName(e) {
    setExperienceRole(e.target.value);
  }

  function handleExperienceCompany(e) {
    setExperienceCompany(e.target.value);
  }

  function handleExperienceDetails(e) {
    setExperienceDetails(e.target.value);
  }

  function handleExperienceStart(e) {
    setExperienceStart(e.target.value);
  }

  function handleExperienceEnd(e) {
    setExperienceEnd(e.target.value);
  }
  function handleExperienceLocation(e) {
    setExperienceLocation(e.target.value);
  }

  function handleSave() {
    const updatedExperience = [...formData.education];
    updatedEexperience[currentExperience] = {
      role: experienceRole,
      company: experienceRole,
      details: experienceDetails,
      start: experienceStart,
      end: End,
      location: lLocation,
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
