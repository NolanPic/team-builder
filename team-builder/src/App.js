import React, { useState } from 'react';
import './App.css';
import { team } from './data';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {


  const [members, setMembers] = useState(team);

  const editMember = member => {
    console.log(member);
  };

  return (
    <div className="App">
      <MemberList members={members} editMember={editMember} />
      <Form members={members} setMembers={setMembers}
      />
    </div>
  );
}

export default App;
