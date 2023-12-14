import { useState } from 'react';
import '../styles/generalTemplate.css';

export default function GeneralTemplate({ formData }) {
  return (
    <div className="general-template">
      <h1 className="fullname"> Kyle Mosier{formData.fullName}</h1>
      <div className="info">
        <p> mosierkyle@gmail.com{formData.email}</p>
        <p> (360)597-8103 {formData.phone}</p>
        <p> 5908 NW 38th ave #217{formData.address}</p>
      </div>
    </div>
  );
}
