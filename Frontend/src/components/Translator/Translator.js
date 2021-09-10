import { useSelector } from 'react-redux';

export const Translator = (firstString,secondString) => {
    const { language } = useSelector(state => state.language);

  return language ==='hun' ? firstString:secondString;
};