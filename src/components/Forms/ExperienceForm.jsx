import { useState } from 'react';
import '/Users/kylemosier/repos/CV-application/src/styles/ExperienceForm.css';

export default function ExperienceForm({
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
    currentExperience != formData.experience.length
      ? formData.experience[currentExperience].location
      : ''
  );

  function handleExperienceRole(e) {
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
    const updatedExperience = [...formData.experience];
    updatedExperience[currentExperience] = {
      role: experienceRole,
      company: experienceCompany,
      details: experienceDetails,
      start: experienceStart,
      end: experienceEnd,
      location: experienceLocation,
    };
    setFormData({ ...formData, experience: updatedExperience });
    setExperienceRole('');
    setExperienceCompany('');
    setExperienceDetails('');
    setExperienceEnd('');
    setExperienceStart('');
    setExperienceLocation('');
    setDownUp({ experiences: downUp.experiences + 1, form: downUp.form - 1 });
  }

  function handleCancel() {
    setDownUp({ experiences: downUp.experiences + 1, form: downUp.form - 1 });
  }

  function handleDelete() {
    if (formData.experience.length === 1) {
      setFormData({
        experience: [],
      });
    } else {
      const updatedExperience = [...formData.experience];
      updatedExperience.splice(currentExperience, 1);
      setFormData({
        experience: updatedExperience,
      });
    }
    setDownUp({ experiences: downUp.experiences + 1, form: downUp.form - 1 });
  }

  return (
    <form className="experience-form" onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <label className="input-label">Role</label>
        <input
          className="input"
          placeholder="Enter Role"
          value={experienceRole}
          onChange={handleExperienceRole}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Company</label>
        <input
          className="input"
          placeholder="Enter Company Name"
          value={experienceCompany}
          onChange={handleExperienceCompany}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Details</label>
        <input
          className="input"
          placeholder="Enter Details"
          value={experienceDetails}
          onChange={handleExperienceDetails}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Start Date</label>
        <input
          className="input"
          placeholder="Enter Start Date"
          value={experienceStart}
          onChange={handleExperienceStart}
        />
      </div>
      <div className="input-group">
        <label className="input-label">End Date</label>
        <input
          placeholder="Enter End Date"
          className="input"
          value={experienceEnd}
          onChange={handleExperienceEnd}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Location</label>
        <input
          placeholder="Enter Location"
          className="input"
          value={experienceLocation}
          onChange={handleExperienceLocation}
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
