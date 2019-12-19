import React, { useState } from 'react';
import './App.css';
import { team } from './data';
import MemberList from './components/MemberList';
import Form from './components/Form';

function App() {
  
  const [members, setMembers] = useState(team);
  const [memberToEdit, setMemberToEdit] = useState(null);

  return (
    <div className="App">
      <MemberList members={members} setMemberToEdit={setMemberToEdit} />
      <Form
        members={members}
        setMember={setMembers}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
      />
    </div>
  );
}

export default App;
