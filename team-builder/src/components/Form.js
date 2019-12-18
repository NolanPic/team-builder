import React from 'react';

const Form = props => {

    const { formValues, updateValue, submitForm } = props;

    return (
        <form>
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
            </select>

            <button>Save</button>

        </form>
    );    
};

export default Form;