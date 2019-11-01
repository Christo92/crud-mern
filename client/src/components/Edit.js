import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function Edit(props) {

    // Set hooks states
    const [personName, setPersonName] = useState('');
    const [personNickName, setPersonNickName] = useState('');
    const [personDescription, setPersonDescription] = useState('');

    // Http request to edit the person
    useEffect(() => {
        async function fetchData() {
            try {
                const editPerson = await axios.get(`/api/person/edit/${props.match.params.id}`);
                let editPersonData = editPerson.data;

                // Update the data with new input value
                setPersonName(editPersonData.personName);
                setPersonNickName(editPersonData.personNickName);
                setPersonDescription(editPersonData.personDescription);

            } catch (err) {
                console.error(err.message)
            }
        }
        fetchData()
    }, [props])

    // Get the person name
    function handlePersonName(e) {
        setPersonName(e.target.value)
    }

    // Get the person nickname
    function handlePersonNickname(e) {
        setPersonNickName(e.target.value)
    }

    // Get the person description
    function handlePersonDescription(e) {
        setPersonDescription(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Let's store the inputs value
        const obj = {
            personName,
            personNickName,
            personDescription
        };

        // Http request post to update value
        try {
            await axios.post(`/api/person/update/${props.match.params.id}`, obj);
        } catch (err) {
            console.log(err.message)
        }

        // After update go back to the list
        props.history.push('/create')
    }

    return (
        <div className="edit-container">
            <h3 className="edit-container__title">Update person</h3>
            <form className="edit-container__form" onSubmit={handleSubmit}>

                <div className="edit-container__form-group">
                    <label className="edit-container__label">Person Name:</label>
                    <input
                        type="text"
                        className="edit-container__input"
                        value={personName}
                        onChange={handlePersonName}
                    />
                </div>

                <div className="edit-container__form-group">
                    <label className="edit-container__label">Person Nickname:</label>
                    <input
                        type="text"
                        className="edit-container__input"
                        value={personNickName}
                        onChange={handlePersonNickname}
                    />
                </div>

                <div className="edit-container__form-group">
                    <label className="edit-container__label">Person Description:</label>
                    <input
                        type="text"
                        className="edit-container__input"
                        value={personDescription}
                        onChange={handlePersonDescription}
                    />
                </div>
                <div className="edit-container__form-group">
                    <input
                        className="edit-container__submit"
                        type="submit"
                        value="Update person"
                    />
                </div>
            </form>
        </div>
    )
}

Edit.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    history: PropTypes.object
}

export default Edit;