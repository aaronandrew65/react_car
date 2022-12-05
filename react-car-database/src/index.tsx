import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import [FirebaseAppProvider, AuthCheck] from 'reactfire';
import { About, Car, Contact, Home} from './components';
import './style.css'
// import {firebaseConfig} from './firebaseConfig';
// import 'firebase/auth';
import {Provider} from 'react-redux';
import { store } from './redux/store';


const temp_props = "Aaron's Database"



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home title={temp_props}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="contact/" element={<Contact/>}/>
        <Route path="/" element={<Car/>}/>
      </Routes>
    </Router>
    </Provider>

  </React.StrictMode>
);

// const temp_props = "Aaron's Database"

// ReactDOM.render(
//   <React.StrictMode>
// 		{/* New content here too! */}
//     <Provider store={store}>
// 		{/* End new content */}
//     <Router>
//       <Switch>


//         <Route exact path="/">
//           <Home title={temp_props}/>
//         </Route>
//         <Route path='/phonebook'>
//           <Phonebook></Phonebook>
//         </Route>
//         <Route path='/contact'>
//           <Contact></Contact>
//         </Route>
//         <Route path='/about'>
//           <About></About>
//         </Route>


//       </Switch>
//     </Router>
// 		{/* Here's the closing tag for that */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
