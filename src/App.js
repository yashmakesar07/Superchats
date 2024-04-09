// src/App.js
import React, { useState, useEffect } from 'react';
import AuthComponent from './components/AuthComponent';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Backscreen">
          <AuthComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
