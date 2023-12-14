import { useState } from 'react';
// import { Helmet } from 'react-helmet';
import '../styles/Education.css';

export default function Education({ formData, setFormData }) {
  const [schoolName, setSchoolName] = useState('');
  const [schoolMajor, setSchoolMajor] = useState('');
  const [schoolStart, setSchoolStart] = useState('');
  const [schoolEnd, setSchoolEnd] = useState('');
  const [schoolLocation, setSchoolLocation] = useState('');
  const [schools, setSchools] = useState([]);
  let [editSave, setEditSave] = useState('0');
  let [downUp, setDownUp] = useState(0);

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
    setEditSave((editSave += 1));
  }

  function handleEdit() {
    setEditSave((editSave -= 1));
  }

  function handleDownUp(e) {
    downUp == 1 ? setDownUp(downUp - 1) : setDownUp(downUp + 1);
  }

  return (
    <div className="general">
      <div className="header-group">
        <h2 className="header">Education</h2>
        {downUp == 0 ? (
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
      {downUp == 0 && (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
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
            {editSave == 0 && (
              <button className="button" onClick={handleSave}>
                Save
              </button>
            )}
            {editSave == 1 && (
              <button className="button editBtn" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
