import '/Users/kylemosier/repos/CV-application/src/styles/experienceTemplate.css';

export default function ExperienceTemplate({ formData }) {
  return (
    <div className="experience-template">
      {formData.experiences.length > 0 && (
        <div className="experience-header">
          <h3>Education</h3>
        </div>
      )}
      <div className="experience-template-content">
        {formData.experiences.map((experience) => {
          return (
            <div key={experience.role} className="experience">
              <div className="left">
                <p className="role">{experience.role}</p>
                <p className="company">{experience.company}</p>
                <p className="details">{experience.details}</p>
              </div>
              <div className="right">
                <p className="location">{experience.location}</p>
                <p className="time">
                  {experience.start} - {experience.end}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
