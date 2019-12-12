import React, { useState } from 'react';
import axios from 'axios';

const ADD_API_URL = '/api/person/add';

const CreateHandleSubmit = WrappedComponent => {
    const CreateHandleSubmit = () => {

        const [personName, setPersonName] = useState('');
        const [personNickName, setPersonNickName] = useState('');
        const [personDescription, setPersonDescription] = useState('');

        function handlePersonName(e) {
            setPersonName(e.target.value);
        }

        function handlePersonNickName(e) {
            setPersonNickName(e.target.value)
        };

        function handlePersonDescription(e) {
            setPersonDescription(e.target.value);
        }

        async function handleSubmit(e) {
            e.preventDefault();

            const obj = {
                personName,
                personNickName,
                personDescription
            };

            // Call add api
            try {
                await axios.post(ADD_API_URL, obj);
            } catch (err) {
                console.error(err.message);
            }

            // Empty back the fields
            setPersonName('');
            setPersonNickName('');
            setPersonDescription('');

            // Refresh the page
            window.location.reload(false);
        }

        return (
            <WrappedComponent
                personName={personName}
                personNickName={personNickName}
                personDescription={personDescription}
                handlePersonName={handlePersonName}
                handlePersonNickName={handlePersonNickName}
                handlePersonDescription={handlePersonDescription}
                handleSubmit={handleSubmit}
            />
        )
    }
    
    return CreateHandleSubmit;
}

export default CreateHandleSubmit;