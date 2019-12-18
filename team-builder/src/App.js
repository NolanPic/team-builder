import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { team } from './data';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {


  const [members, setMembers] = useState(team);

  return (
    <div className="App">
      <MemberList members={members} />
      <Form members={members} setMembers={setMembers} />
    </div>
  );
}

export default App;
