import React, { useState } from 'react';
import './App.css'

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setRegistrationSuccess(true);
  };

  return (
    <div className="registration-form">
      <h2>Форма регистрации</h2>
      {registrationSuccess ? (
        <p className="success-message">Регистрация прошла успешно</p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="firstName">Имя:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Фамилия:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit" className="register-button">Зарегистрироваться</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
