import React, { useState } from 'react';
import { database } from '../../firebase';
import '../../styles/EventAdder.css';

export const EventAdder = () => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [color, setColor] = useState('red');

  const validateAdminInput = () => {
    if (!start && !end && !color) {
      throw Error('Kérlek töltsd ki az összes mezőt!');
    }
  };

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    validateAdminInput();
    database.collection('events').add({
      title: title,
      start: start,
      end: end,
      color:color
  })
  .then((docRef) => {
      alert('Foglalás sikeresen hozzáadva!');
  })
  .catch((error) => {
      alert('Foglalás hozzáadása sikertelen.');
  });
  };

  const changeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="adminEventBox">
      <form className="adminForm" onSubmit={handleSubmit}>
        <h1 className="addEventTitle">Foglalás hozzáadása</h1>
        <input
          className="input"
          type="text"
          placeholder="foglalás címe"
          value={title}
          onChange={(changeEvent) => {
            setTitle(changeEvent.target.value);
          }}
        />
        <input
          className="input"
          type="date"
          placeholder="start date"
          value={start}
          required
          onChange={(changeEvent) => {
            setStart(changeEvent.target.value);
          }}
        />
        <input
          className="input"
          type="date"
          placeholder="end date"
          required
          value={end}
          onChange={(changeEvent) => {
            setEnd(changeEvent.target.value);
          }}
        />
        <input
          className="input"
          type="text"
          placeholder="color"
          required
          value={color}
          onChange={(changeEvent) => {
            setColor(changeEvent.target.value);
          }}
        />
        <div className="colorButtons">
          <button
            type="button"
            className="redButton"
            onClick={changeColor}
            value="red"
          ></button>
          <button
            type="button"
            className="greenButton"
            onClick={changeColor}
            value="green"
          ></button>
          <button
            type="button"
            className="yellowButton"
            onClick={changeColor}
            value="yellow"
          ></button>
        </div>
        <button type="submit" className="addEventButton">
          Foglalás hozzáadása
        </button>
      </form>
    </div>
  );
};
