import '/Users/kylemosier/repos/CV-application/src/styles/educationTemplate.css';

export default function EducationTemplate({ formData }) {
  return (
    <div className="education-template">
      <div className="education-header">
        <h3>Education</h3>
      </div>
      <div className="education-content">
        {/* {formData.education.map((school) => {
          return ( */}
        <div className="school">
          <div className="left">
            <p className="school-name">
              California Polytechnic State University
            </p>
            <p className="study">
              Business Administration - Information Systems
            </p>
          </div>
          <div className="right">
            <p className="time">September 2020 - June 2024</p>
            <p className="location">San Luis Obispo, CA</p>
          </div>
        </div>
        {/* );
        })} */}
      </div>
    </div>
  );
}
