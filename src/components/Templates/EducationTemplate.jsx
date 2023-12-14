import '/Users/kylemosier/repos/CV-application/src/styles/educationTemplate.css';

export default function EducationTemplate({ formData }) {
  return (
    <div className="education-template">
      <div className="education-header">
        <h3>Education</h3>
      </div>
      <div className="education-content">
        {formData.education.map((school) => {
          return (
            <div className="school">
              <div className="left">
                <p className="school-name">{school.name}</p>
                <p className="study">{school.major}</p>
              </div>
              <div className="right">
                <p className="time">
                  {school.start} - {school.end}
                </p>
                <p className="location">{school.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
