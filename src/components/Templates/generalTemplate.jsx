import { Helmet } from 'react-helmet';
import '/Users/kylemosier/repos/CV-application/src/styles/generalTemplate.css';

export default function GeneralTemplate({ formData }) {
  return (
    <div className="general-template">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/bdec03c25d.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <h1 className="fullname"> Kyle Mosier{formData.fullName}</h1>
      <div className="info">
        <p>
          {' '}
          <i className="fa-solid fa-envelope svg"></i>
          mosierkyle@gmail.com
          {formData.email}
        </p>
        <p>
          <i className="fa-solid fa-phone svg"></i>
          (360)597-8103 {formData.phone}
        </p>
        <p>
          <i className="fa-solid fa-location-dot svg"></i>
          5908 NW 38th ave #217{formData.address}
        </p>
      </div>
    </div>
  );
}
