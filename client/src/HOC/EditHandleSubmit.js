import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EDIT_API_URL = '/api/person/edit/';
const UPDATE_API_URL = '/api/person/update/';

const EditHandleSubmit = WrappedComponent => {
    const EditHandleSubmit = (props) => {

        const [personName, setPersonName] = useState('');
        const [personNickName, setPersonNickName] = useState('');
        const [personDescription, setPersonDescription] = useState('');

        useEffect(() => {
            async function fetchData() {
                try {
                    const editPerson = await axios.get(`${EDIT_API_URL}${props.match.params.id}`);
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
                await axios.post(`${UPDATE_API_URL}${props.match.params.id}`, obj);
            } catch (err) {
                console.log(err.message)
            }

            // After update go back to the list
            props.history.push('/create')
        }

        return (
            <WrappedComponent
                personName={personName}
                personNickName={personNickName}
                personDescription={personDescription}
                handlePersonName={handlePersonName}
                handlePersonNickname={handlePersonNickname}
                handlePersonDescription={handlePersonDescription}
                handleSubmit={handleSubmit}
            />
        )
    }

    return EditHandleSubmit;
}

export default EditHandleSubmit;