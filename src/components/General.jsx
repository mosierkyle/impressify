import { useState } from 'react';
import '../styles/General.css';

function General({ formData, setFormData }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  let [editSave, setEditSave] = useState('0');
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
    setEditSave((editSave += 1));
    setFormData({
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
    });
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }

  function handleEdit() {
    setEditSave((editSave -= 1));
    setFullName(formData.fullName);
    setEmail(formData.email);
    setPhone(formData.phone);
    setAddress(formData.address);
  }

  function handleDownUp(e) {
    downUp == 1 ? setDownUp(downUp - 1) : setDownUp(downUp + 1);
  }

  return (
    <div className="general">
      <div className="header-group">
        <h2 className="header">General Information</h2>
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
          <div className="button-div">
            {editSave == 0 && (
              <button className="button" onClick={handleSave}>
                Save
              </button>
            )}
            {editSave == 1 && (
              <button className="button" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default General;
