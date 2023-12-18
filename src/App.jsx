import { useState } from 'react';
import './styles/App.css';
import General from './components/General';
import GeneralTemplate from './components/Templates/generalTemplate';
import EducationTemplate from './components/Templates/EducationTemplate';
import Education from './components/Education';

function App() {
  const [generalFormData, setGeneralFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
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
