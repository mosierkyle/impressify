import { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/General.css';

function General({ formData, setFormData }) {
  const [fullName, setFullName] = useState(
    formData.fullName ? formData.fullName : ''
  );

  const [email, setEmail] = useState(formData.email ? formData.email : '');

  const [phone, setPhone] = useState(formData.phone ? formData.phone : '');

  const [address, setAddress] = useState(
    formData.address ? formData.address : ''
  );

  let [downUp, setDownUp] = useState(0);

  function handleFullName(e) {
    setFullName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function handleSave() {
    setFormData({
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
    });
    // setFullName('');
    // setEmail('');
    // setPhone('');
    // setAddress('');
  }

  // function handleEdit() {
  //   setEditSave((editSave -= 1));
  //   setFullName(formData.fullName);
  //   setEmail(formData.email);
  //   setPhone(formData.phone);
  //   setAddress(formData.address);
  // }

  function handleDownUp(e) {
    downUp == 1 ? setDownUp(downUp - 1) : setDownUp(downUp + 1);
  }

  return (
    <div className="general">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="header-group">
        <h2 className="header">
          <i className="fa-solid fa-user"></i> General Information
        </h2>
        {downUp == 0 ? (
          <img
            src="https://rmathr.github.io/cv-project/d529ba3bd8a0c3f53ac7.png"
            className="expand-icon"
            onClick={handleDownUp}
          />
        ) : (
          <img
            src="https://rmathr.github.io/cv-project/9a85e2732c3a2bab601e.png"
            className="expand-icon"
            onClick={handleDownUp}
          />
        )}
      </div>
      {downUp == 0 && (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input
              className="input"
              placeholder="First name"
              value={fullName}
              onChange={handleFullName}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              className="input"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Phone Number</label>
            <input
              className="input"
              placeholder="Enter phone number"
              value={phone}
              onChange={handlePhone}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Address</label>
            <input
              placeholder="City, State/Providence"
              className="input"
              value={address}
              onChange={handleAddress}
            />
          </div>
          <div className="button-general-div">
            <button className="button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default General;
