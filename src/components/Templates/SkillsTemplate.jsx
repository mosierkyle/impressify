import '../../styles/SkillsTemplate.css';

export default function SkillsTemplate({ formData }) {
  return (
    <div className="skills-template">
      {formData.skills.length > 0 && (
        <div className="skills-header">
          <h3>Skills</h3>
        </div>
      )}
      <div className="skills-template-content">
        {formData.skills.length > 0 && <p className="skills-intro">Skills</p>}
        <div className="skills-div">
          {formData.skills.map((skill, index) => {
            return (
              <p className="skill-unit" key={skill + index}>
                {skill},
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
