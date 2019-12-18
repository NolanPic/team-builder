import React from 'react';

const Member = props => {
    const { member, editMember } = props;
    return (
        <tr>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.role}</td>
            <td><button onClick={() => editMember(member)}>Edit</button></td>
        </tr>
    );
};

export default Member;