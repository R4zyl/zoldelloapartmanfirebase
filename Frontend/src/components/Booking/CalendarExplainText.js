import React from 'react';
import { Translator } from '../Translator/Translator';

export const CalendarExplainText = () => {
  return (
    <div>
      <div className="calendarExplainTextWhite">
        <div className="whiteCube"></div>
        {Translator(
          'Az egész ház üres és foglalható.',
          'The whole house is free and available for booking.'
        )}
      </div>
      <div className="calendarExplainTextYellow">
        <div className="yellowCube"></div>
        {Translator(
          'Egy vagy több szoba foglalt, de még vannak foglalható szobák.',
          'One or more rooms are booked, but there are still available rooms.'
        )}
      </div>
      <div className="calendarExplainTextRed">
        <div className="redCube"></div>
        {Translator(
          'Az apartman teljesen foglalt.',
          'The apartment is fully booked.'
        )}
      </div>
    </div>
  );
};
