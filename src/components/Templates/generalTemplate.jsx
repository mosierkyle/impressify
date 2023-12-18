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
      <h1 className="fullname">{formData.fullName}</h1>
      <div className="info">
        <p>
          {formData.email && <i className="fa-solid fa-envelope svg"></i>}
          {formData.email}
        </p>
        <p>
          {formData.phone && <i className="fa-solid fa-phone svg"></i>}
          {formData.phone}
        </p>
        <p>
          {formData.address && <i className="fa-solid fa-location-dot svg"></i>}
          {formData.address}
        </p>
      </div>
    </div>
  );
}
