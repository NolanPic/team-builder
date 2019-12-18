import React from 'react';

const Member = props => {
    const { member } = props;
    return (
        <tr>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.role}</td>
        </tr>
    );
};

export default Member;