import React, { useState, useEffect } from 'react';
import { roles } from '../data'; 

const Form = props => {

    const initialForm = {
        id: 0,
        name: '',
        email: '',
        role: ''
      };

    const { members, setMembers, memberToEdit, setMemberToEdit } = props;
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
        
        // if a member was being edited, set it back to null
        setMemberToEdit(null);
    };

    const updateFormValue = e => {
        setMemberForm({
            ...memberForm,
            [e.target.id]: e.target.value
        });
    };

    useEffect(() => {
        // set the member to be edited if it exists / is not null
        if(memberToEdit && memberToEdit.id !== 0){
            setMemberForm(memberToEdit);
        }
    }, [memberToEdit]);

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
            <select id="role" onChange={updateFormValue} value={memberForm.role}>
                <option value="">-- Select a role --</option>
                {selectRoles.map(({ role }) => (
                    <option
                        key={role}
                        value={role}>
                        {role}
                    </option>
                ))}
            </select>

            <button>Save</button>

        </form>
    );    
};

export default Form;