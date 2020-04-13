import React from 'react';
import './App.css';
import './Component/ClickCounter';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="Arnav"/>
      <HoverCounter name="Arnav"/>
    </div>
  );
}

export default App;
