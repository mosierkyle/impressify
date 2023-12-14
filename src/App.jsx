import { useState } from 'react';
import './styles/App.css';
import General from './components/General';
import GeneralTemplate from './components/generalTemplate';

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
      </div>
    </div>
  );
}

export default App;
