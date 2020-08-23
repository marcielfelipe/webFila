import React from 'react';
import Routes from './routes';

import {PasswordProvider} from './context/PasswordContext'

import './global.css';

function App() {
  return (
    <PasswordProvider>
      <Routes/>
    </PasswordProvider>
  );
}

export default App;
