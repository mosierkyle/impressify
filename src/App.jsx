import { useState } from 'react';
import './styles/App.css';
import General from '/Users/kylemosier/repos/CV-application/src/components/General.jsx';

function App() {
  let [editSaveGeneral, setEditSaveGeneral] = useState('0');

  function handleSaveGeneral(e) {
    setEditSaveGeneral((editSaveGeneral += 1));
  }

  function handleEditGeneral(e) {
    setEditSaveGeneral((editSaveGeneral -= 1));
  }

  return (
    <div className="app">
      <div className="edit">
        <General
          editSave={editSaveGeneral}
          handleSave={handleSaveGeneral}
          handleEdit={handleEditGeneral}
        ></General>
      </div>

      <div className="resume">random words</div>
    </div>
  );
}

export default App;
