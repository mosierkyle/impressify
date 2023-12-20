import { useState } from 'react';
import './styles/App.css';
import GeneralTemplate from './components/Templates/generalTemplate';
import EducationTemplate from './components/Templates/EducationTemplate';
import ExperienceTemplate from './components/Templates/ExperienceTemplate';
import SkillsTemplate from './components/Templates/SkillsTemplate';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import General from './components/General';

function App() {
  const [generalFormData, setGeneralFormData] = useState({
    fullName: 'Kyle Mosier',
    email: 'kylemosier@email.com',
    phone: '4159098537',
    address: 'Somewhere SW 99th ave',
  });

  const [educationFormData, setEducationFormData] = useState({
    education: [
      {
        name: 'California Polytechnic State University',
        major: 'Business Administration - Information Systems',
        start: 'September 2020',
        end: 'June 2024',
        location: 'San Luis Obispo, CA',
      },
      {
        name: 'UW',
        major: 'Masters in Computer Science',
        start: 'September 2024',
        end: 'Present',
        location: 'Seattle, WA',
      },
    ],
  });

  const [experienceFormData, setExperienceFormData] = useState({
    experience: [
      {
        role: 'Front-End Web Developer',
        company: 'Bixby Agency',
        details:
          'Cofounded Web Development Agency working for 5+ local clients. Deployed Web Flow to engineer the UI and UX for clientele websites',
        start: 'June 2022',
        end: 'Present',
        location: 'San Luis Obispo, CA',
      },
      {
        role: 'Restaurant Server',
        company: 'Hula Boy Charboil',
        details:
          'Implemented a welcoming and positive environment to make diners and guests feel at home. Maintained an extensive knowledge of 100+ food and drink items to proactively up-sell the menu',
        start: 'May 2021',
        end: 'September 2021',
        location: 'Vancouver, WA',
      },
    ],
  });

  const [skillsFormData, setSkillsFormData] = useState({
    skills: [
      'JavaScript',
      'React',
      'HTML',
      'CSS',
      'Git',
      'Node',
      'Express',
      'MongoDB',
      'Jest',
      'Database Management',
      'Data Communications and Networking',
      'Aviation',
      'Communication',
      'Customer Service',
      'Sales',
      'Leadership',
    ],
  });

  return (
    <div className="app">
      <div className="edit">
        <General
          formData={generalFormData}
          setFormData={setGeneralFormData}
        ></General>
        <Education
          formData={educationFormData}
          setFormData={setEducationFormData}
        ></Education>
        <Experience
          formData={experienceFormData}
          setFormData={setExperienceFormData}
        ></Experience>
        <Skills
          formData={skillsFormData}
          setFormData={setSkillsFormData}
        ></Skills>
      </div>

      <div className="resume">
        <GeneralTemplate formData={generalFormData}></GeneralTemplate>
        <EducationTemplate formData={educationFormData}></EducationTemplate>
        <ExperienceTemplate formData={experienceFormData}></ExperienceTemplate>
        <SkillsTemplate formData={skillsFormData}></SkillsTemplate>
      </div>
    </div>
  );
}

export default App;
