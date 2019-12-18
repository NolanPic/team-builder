import React, { useState } from 'react';
import { roles } from '../data'; 

const Form = props => {

    const initialForm = {
        id: 0,
        name: '',
        email: '',
        role: ''
      };

    const { members, setMembers } = props;
    const [memberForm, setMemberForm] = useState(initialForm);
    const [selectRoles] = useState(roles);

    const makeNewMemberID = () => parseInt(performance.now().toString().replace('.', ''));

    const submitForm = e => {
        e.preventDefault();

        if(memberForm.id === 0) {
            // new member
            setMembers(
                [ 
                    ...members,
                    { ...memberForm, id: makeNewMemberID() } 
                ]
            );
        }

        setMemberForm(initialForm);
    };

    const updateFormValue = e => {
        setMemberForm({
            ...memberForm,
            [e.target.id]: e.target.value
        });
    };

    return (
        <form onSubmit={submitForm}>
            <input
                placeholder="Name"
                type="text"
                id="name"
                value={memberForm.name}
                onChange={updateFormValue}
            />
            <input
                placeholder="Email"
                type="email"
                id="email"
                value={memberForm.email}
                onChange={updateFormValue}
            />
            <select id="role" onChange={updateFormValue}>
                <option value="">-- Select a role --</option>
                {selectRoles.map(({ role }) => (
                    <option
                        key={role}
                        value={role}
                        selected={memberForm.role === role}>
                        {role}
                    </option>
                ))}
            </select>

            <button>Save</button>

        </form>
    );    
};

export default Form;