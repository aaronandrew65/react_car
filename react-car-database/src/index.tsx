import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {FirebaseAppProvider, AuthCheck} from 'reactfire';
import { About, Car, Contact, Home, SignIn} from './components';
import './style.css'
import {firebaseConfig} from './firebaseConfig';
import 'firebase/auth';
import {Provider} from 'react-redux';
import { store } from './redux/store';
// import { FirebaseAppProvider } from 'reactfire';



const temp_props = "Car Database"
const t_props = "Contact"
const a_props = "About"

ReactDOM.render(
  <React.StrictMode>
		{/* New content here too! */}
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense= {true}>
    <Provider store={store}>
		{/* End new content */}
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/Car'>
          <Car></Car>
        </Route>
        <Route path='/contact'>
          <Contact title = {t_props}></Contact>
        </Route>
        <Route path='/about'>
          <About title={a_props}></About>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>


      </Switch>
    </Router>
		{/* Here's the closing tag for that */}
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
