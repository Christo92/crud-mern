import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import Person from '../components/Person/Person';

const GET_API_URL = '/api/person/list';
const DELETEALL_API_URL = '/api/person/deleteAll';

const PersonHandle = WrappedComponent => {
    const PersonHandle = () => {

        // Set State hooks
        const [persons, setPersonsList] = useState([]);

        // Http request to get persons data
        useEffect(() => {
            async function fetchData() {
                try {
                    const personList = await axios.get(GET_API_URL);
                    let personData = personList.data;

                    setPersonsList(personData)

                } catch (error) {
                    console.error(error.message)
                }
            }
            fetchData()
        }, []);

        // Iterate in persons array to show each
        function displayPersons() {
            if (persons.length > 0) {
                return persons.map(person => (
                    <Person key={uuid()} person={person} />
                ))
            } else {
                return <div className="personlist-container__title">The list is empty</div>
            }
        }

        // Delete All button
        function displayButtonDeleteAll() {
            if (persons.length > 0) {
                return <button className="personlist-container__block-deleteAll" onClick={deleteAllPersons}>Delete All</button>
            }
        }

        // Delete All persons on list
        async function deleteAllPersons() {
            try {
                await axios.get(DELETEALL_API_URL);

                // Empty the array
                setPersonsList([])

            } catch (err) {
                console.log(err.message)
            }
        }

        return (
            <WrappedComponent persons={persons} displayPersons={displayPersons} displayButtonDeleteAll={displayButtonDeleteAll} />
        )
    }

    return PersonHandle;
}

export default PersonHandle;