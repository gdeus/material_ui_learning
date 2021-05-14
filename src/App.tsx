import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiniDrawer from './components/drawer';
import Routes from './routes';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <MiniDrawer>
        <Routes/>
      </MiniDrawer>
    </HashRouter>
  );
}

export default App;
