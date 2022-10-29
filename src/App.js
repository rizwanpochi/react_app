import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FirstAPI from './components/FirstAPI';
import CommonAPI from './components/CommonAPI';
import MergedAPI from './components/MergedAPI';
import Navigation from './components/Navigation';



class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
            <Routes>
              <Route path='/first' element={<FirstAPI/>}/>
              <Route path='/common' element={<CommonAPI/>}/>
              <Route path='/merged' element={<MergedAPI/>}/>
           </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
