import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

function Person(props) {

    async function handleDelete() {
        try {
            await axios.get(`/api/person/delete/${props.person._id}`)
        } catch (err) {
            console.log(err.message)
        }

        window.location.reload();
    }

    return (
        <div className="personlist-container__block-person">
            <p className="personlist-container__block-person-firstname">Firsname: <span>{props.person.personName}</span></p>
            <p className="personlist-container__block-person-nickname">Nickname: <span>{props.person.personNickName}</span></p>
            <p className="personlist-container__block-person-description">Description: <span>{props.person.personDescription}</span></p>
            <div className="personlist-container_buttons">
                <Link to={`/edit/${props.person._id}`} className="personlist-container__block-person-editbutton">Edit</Link>
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

export default Person;