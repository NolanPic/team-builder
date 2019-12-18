import React, { useState } from 'react';
import { roles } from '../data'; 

const Form = props => {

    const { formValues, updateValue, submitForm } = props;
    const [selectRoles] = useState(roles);

    return (
        <form onSubmit={submitForm}>
            <input
                placeholder="Name"
                type="text"
                id="name"
                value={formValues.name}
                onChange={updateValue}
            />
            <input
                placeholder="Email"
                type="email"
                id="email"
                value={formValues.email}
                onChange={updateValue}
            />
            <select id="role" onChange={updateValue}>
                <option value="">-- Select a role --</option>
                {selectRoles.map(({ role }) => (
                    <option
                        key={role}
                        value={role}
                        selected={formValues.role === role}>
                        {role}
                    </option>
                ))}
            </select>

            <button>Save</button>

        </form>
    );    
};

export default Form;