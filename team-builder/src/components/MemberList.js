import React from 'react';
import Member from './Member';

const MemberList = props => {

    const { members, editMember } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {members.map(member => (
                    <Member
                        key={member.id}
                        member={member}
                        editMember={editMember}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default MemberList;