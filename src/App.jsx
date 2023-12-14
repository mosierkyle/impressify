import { useState } from 'react';
import './styles/App.css';
import General from '/Users/kylemosier/repos/CV-application/src/components/General.jsx';

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
        <h2>Another Component</h2>
        <p>Full Name: {generalFormData.fullName}</p>
        <p>Email: {generalFormData.email}</p>
        <p>Phone: {generalFormData.phone}</p>
        <p>Address: {generalFormData.address}</p>
      </div>
    </div>
  );
}

export default App;
