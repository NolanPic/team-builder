import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { team } from './data';

function App() {

  const [members, setMembers] = useState(team);

  return (
    <div className="App">
      <p>Hello there.</p>
    </div>
  );
}

export default App;
