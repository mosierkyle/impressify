import { useState } from 'react';
import '/Users/kylemosier/repos/CV-application/src/styles/SkillsForm.css';

export default function SkillsForm({
  formData,
  setFormData,
  downUp,
  setDownUp,
  currentSkill,
}) {
  const [skillName, setSkillName] = useState(
    currentSkill != formData.skills.length
      ? formData.education[currentSchool].name
      : ''
  );

  function handleSkillName(e) {
    setSkilllName(e.target.value);
  }

  function handleSave() {
    const updatedSkills = [...formData.skills];
    updatedSkills[currentSkill] = { skillName };
    setFormData({ skills: updatedSkills });
    setSkillName('');
    setDownUp({ skills: downUp.skills + 1, form: downUp.form - 1 });
  }

  function handleCancel() {
    setDownUp({ skills: downUp.skills + 1, form: downUp.form - 1 });
  }

  function handleDelete() {
    if (formData.education.length === 1) {
      setFormData({
        skills: [],
      });
    } else {
      const updatedSkills = [...formData.skills];
      updatedSkills.splice(currentSkill, 1);
      setFormData({
        skills: updatedSkills,
      });
    }
    setDownUp({ skills: downUp.skills + 1, form: downUp.form - 1 });
  }

  return (
    <form className="skills-form" onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <label className="input-label">Skill</label>
        <input
          className="input"
          placeholder="Enter Skill"
          value={skillName}
          onChange={handleSkillName}
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
