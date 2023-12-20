import '../../styles/experienceTemplate.css';

export default function ExperienceTemplate({ formData }) {
  return (
    <div className="experience-template">
      {formData.experience.length > 0 && (
        <div className="experience-header">
          <h3>Experience</h3>
        </div>
      )}
      <div className="experience-template-content">
        {formData.experience.map((experience) => {
          return (
            <div key={experience.role} className="experience-unit">
              <div className="left">
                <p className="role">{experience.role}</p>
                <em className="company">{experience.company}</em>
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
