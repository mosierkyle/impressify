import { useState } from 'react';
import './styles/App.css';
import General from './components/General';
import GeneralTemplate from './components/Templates/generalTemplate';
import EducationTemplate from './components/Templates/EducationTemplate';

function App() {
  const [generalFormData, setGeneralFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  return (
    <div className="app">
      <div className="edit">
        <General
          formData={generalFormData}
          setFormData={setGeneralFormData}
        ></General>
      </div>

      <div className="resume">
        <GeneralTemplate formData={generalFormData}></GeneralTemplate>
        <EducationTemplate></EducationTemplate>
      </div>
    </div>
  );
}

export default App;
