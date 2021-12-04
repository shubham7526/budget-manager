import React from 'react';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router'
import { CountContextApp } from './ContextApi/ContextApi';
import './App.css';

const App=()=>{


  return (
    <CountContextApp>
        <Header/>
        <Router/>
    </CountContextApp>
  );
}

export default App;
