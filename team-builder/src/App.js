import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { team } from './data';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {

  const initialForm = {
    id: 0,
    name: '',
    email: '',
    role: ''
  };

  const [members, setMembers] = useState(team);
  const [memberForm, setMemberForm] = useState(initialForm);

  return (
    <div className="App">
      <MemberList members={members} />
      <Form formValues={memberForm} />
    </div>
  );
}

export default App;
