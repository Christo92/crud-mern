import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>Name: <span>{props.person.personName}</span></p>
            <p>Nickname: <span>{props.person.personNickName}</span></p>
            <p>Description: <span>{props.person.personDescription}</span></p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Person;