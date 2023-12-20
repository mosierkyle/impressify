import '/Users/kylemosier/repos/CV-application/src/styles/SkillsTemplate.css';

export default function SkillsTemplate({ formData }) {
  return (
    <div className="skills-template">
      {formData.skills.length > 0 && (
        <div className="skills-header">
          <h3>Skills</h3>
        </div>
      )}
      <div className="skills-template-content">
        <p className="skills-intro">Technical: </p>
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
