import { useDispatch } from 'react-redux';
import { changeLanguageToEngAction } from '../../actions';
export function GetLocation() {
  const dispatch = useDispatch();

  fetch(
    'https://api.geoapify.com/v1/ipinfo?apiKey=983bd8fff7ef4e99a5da8822c235281a',
    {
      method: 'GET',
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      if (json.country.capital !== 'Budapest')
        dispatch(changeLanguageToEngAction());
    });
}
