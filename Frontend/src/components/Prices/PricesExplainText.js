import React from 'react';
import { Translator } from '../index';

export const PricesExplainText = () => {
  return (
    <div className="explainTextBox">
      <div>
        {Translator(
          '*Lépj velünk kapcsolatba egyéni ajánlatokért!',
          '*Contact us for a private offer!'
        )}
      </div>
      <div>
        {Translator(
          '*A foglaláshoz 30% előleg utalása szükséges.',
          '*For a reservation to be final, 30% of the price must be transfered in advance.'
        )}
      </div>
      <div>
        {Translator(
          '*18 éves kor felett 450 forint idegenforgalmi adó fizetendő.',
          '*Over 18 years of age, a non-resident tax of 450 HUF/ Person must be paid.'
        )}
      </div>
    </div>
  );
};
