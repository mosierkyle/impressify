import { useState } from 'react';
import './styles/App.css';
import General from './components/General';
import GeneralTemplate from './components/Templates/generalTemplate';
import EducationTemplate from './components/Templates/EducationTemplate';
import Education from './components/Education';

function App() {
  const [generalFormData, setGeneralFormData] = useState({
    fullName: 'Kyle Mosier',
    email: 'mosierkyle@gmail.com',
    phone: '3605978103',
    address: '5908 NW 38th Ave #217',
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
        major: 'NOT Business Administration - Information Systems',
        start: 'Not eptember 2020',
        end: 'Not June 2024',
        location: 'NOt San Luis Obispo, CA',
      },
    ],
  });

  const [experienceFormData, setExperienceFormData] = useState({
    education: [
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
      </div>

      <div className="resume">
        <GeneralTemplate formData={generalFormData}></GeneralTemplate>
        <EducationTemplate formData={educationFormData}></EducationTemplate>
      </div>
    </div>
  );
}

export default App;
