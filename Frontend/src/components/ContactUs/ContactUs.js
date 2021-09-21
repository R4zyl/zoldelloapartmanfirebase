import React, { useState } from 'react';
import { ContactDetails } from './ContactDetails';
import '../../styles/ContactUs.css';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
import { Translator } from '../index';

export const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const templateId = 'template_tajhqoc';
  const serviceId = 'service_9buup4l';
  const userId = 'user_1PZACHHxyovrKS4MhYsr4';
  const history = useHistory();

  const validateUserInput = () => {
    if (!email && !name) {
      throw Error('Please fill out your email and name.');
    }
  };

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    await validateUserInput();
    let paramsObject = {
      email: email,
      name: name,
    };
    emailjs.send(serviceId, templateId, paramsObject, userId);
    history.push('/');
  };

  return (
    <div className="messageBox">
      <ContactDetails component={ContactDetails} />
      <form className="messageForm" onSubmit={handleSubmit}>
        <h1 className="messageTitle">
          {Translator('Írj nekünk!', 'Contact us')}
        </h1>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(changeEvent) => {
            setEmail(changeEvent.target.value);
          }}
        />
        <input
          data-testid="0005"
          className="input"
          type="text"
          placeholder={Translator('Név', 'Your name')}
          value={name}
          onChange={(changeEvent) => {
            setName(changeEvent.target.value);
          }}
        />
        <input
          className="textBoxInput"
          type="text"
          minLength="15"
          value={message}
          onChange={(changeEvent) => {
            setMessage(changeEvent.target.value);
          }}
        />
        <button data-testid="0006" className="contactFormButton" type="submit">
          {Translator('Üzenet küldése', 'Send message')}
        </button>
      </form>
    </div>
  );
};
