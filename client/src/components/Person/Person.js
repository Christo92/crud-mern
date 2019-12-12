import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import DeleteHandleSubmit from '../../HOC/DeleteHandleSubmit';

function Person(props) {

    const { handleDelete, person: { personName, personNickName, personDescription, _id } } = props;

    return (
        <div className="personlist-container__block-person">
            <p className="personlist-container__block-person-firstname">Firsname: <span>{personName}</span></p>
            <p className="personlist-container__block-person-nickname">Nickname: <span>{personNickName}</span></p>
            <p className="personlist-container__block-person-description">Description: <span>{personDescription}</span></p>
            <div className="personlist-container_buttons">
                <Link to={`/edit/${_id}`} className="personlist-container__block-person-editbutton">Edit</Link>
                <button onClick={handleDelete} className="personlist-container__block-person-deletebutton">Delete</button>
            </div>
        </div>
    )
}

Person.propTypes = {
    person: PropTypes.shape({
        _id: PropTypes.string,
        personName: PropTypes.string,
        personNickName: PropTypes.string,
        personDescription: PropTypes.string,
    }).isRequired
}

export default DeleteHandleSubmit(Person);