import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { Helmet } from 'react-helmet';
import '../styles/Download.css';

const ResumePDFGenerator = ({
  resumeSection,
  setGeneral,
  setEducation,
  setExperience,
  setSkills,
}) => {
  const handleDownload = () => {
    if (resumeSection) {
      const options = { quality: 0.95 };

      toPng(resumeSection, options)
        .then(function (dataUrl) {
          const pdf = new jsPDF();
          const imgProps = pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('Resume.pdf');
        })
        .catch(function (error) {
          console.error('Error generating image:', error);
        });
    } else {
      console.error('Resume section not found');
    }
  };

  const handleClear = () => {
    setGeneral({
      fullName: '',
      email: '',
      phone: '',
      address: '',
    });
    setEducation({ education: [] });
    setExperience({ experience: [] });
    setSkills({ skills: [] });
  };

  return (
    <div className="download-div">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <button className="download-button" onClick={handleDownload}>
        Download <i className="fa-solid fa-cloud-arrow-down"></i>
      </button>
      <button className="clear-button" onClick={handleClear}>
        Clear Resume <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default ResumePDFGenerator;
