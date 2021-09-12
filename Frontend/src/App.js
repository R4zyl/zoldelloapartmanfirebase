import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotImplementedYet, Header, Login, MyGallery, LandingPage, ContactUs, MyCalendar, Prices,Footer,GetLocation,CookieConsentBar } from './components';
import { useDispatch } from 'react-redux';
import { loadUserDataAction } from './actions';
import { auth } from './firebase.js';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(loadUserDataAction(user));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <div className="App">
        {GetLocation()}
        <Header />
        <CookieConsentBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/admin" component={Login} />
          <Route path="/gallery" component={MyGallery} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/calendar" component={MyCalendar} />
          <Route path="/prices" component={Prices} />
          <Route path="*" component={NotImplementedYet} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
