import React from 'react';
import { Link } from 'react-router-dom';

const Person = (props) => {
    return (
        <div>
            <p>Name: <span>{props.person.personName}</span></p>
            <p>Nickname: <span>{props.person.personNickName}</span></p>
            <p>Description: <span>{props.person.personDescription}</span></p>
            <Link to={`/edit/${props.person._id}`}>Edit</Link>
            <button>Delete</button>
        </div>
    )
}

export default Person;