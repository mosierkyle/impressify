import '../../styles/educationTemplate.css';

export default function EducationTemplate({ formData }) {
  return (
    <div className="education-template">
      {formData.education.length > 0 && (
        <div className="education-header">
          <h3>Education</h3>
        </div>
      )}
      <div className="education-template-content">
        {formData.education.map((school) => {
          return (
            <div key={school.name} className="school">
              <div className="left">
                <p className="school-name">{school.name}</p>
                <p className="study">{school.major}</p>
              </div>
              <div className="right">
                <p className="location">{school.location}</p>
                <p className="time">
                  {school.start} - {school.end}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
