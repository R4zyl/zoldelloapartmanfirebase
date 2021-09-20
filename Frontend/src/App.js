import React, { useEffect,Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotImplementedYet, Header, Login, LandingPage, ContactUs, MyCalendar, Prices,Footer,GetLocation,CookieConsentBar,Loader } from './components';
import { useDispatch } from 'react-redux';
import { loadUserDataAction } from './actions';
import { auth } from './firebase.js';
import './styles/App.css';

const Gallery = lazy(() => import('./components/GalleryReroute'));

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
        <Suspense fallback={<div><Loader /></div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/admin" component={Login} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/calendar" component={MyCalendar} />
          <Route path="/prices" component={Prices} />
          <Route path="/lazy" component={Loader} />
          <Route path="*" component={NotImplementedYet} />
        </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
