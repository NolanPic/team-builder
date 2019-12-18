import React from 'react';
import Member from './Member';

const MemberList = props => {

    const { members } = props;

    return (
        <table>
            <th>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
            </th>
            {members.map(member => (
                <Member member={member} />
            ))}
        </table>
    );
};

export default MemberList;