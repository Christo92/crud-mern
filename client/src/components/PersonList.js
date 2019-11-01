import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
// Component
import Person from './Person';
import Create from './Create';

function PersonList(props) {

    // Set State hooks
    const [persons, setPersonsList] = useState([]);

    // Http request to get persons data
    useEffect(() => {
        async function fetchData() {
            try {
                const personList = await axios.get('/api/person/list');
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
            await axios.get('/api/person/deleteAll');

            // Empty the array
            setPersonsList([])

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="personlist-container">
            <Create />
            {displayButtonDeleteAll()}
            <div className="personlist-container__block">
                {displayPersons()}
            </div>
        </div>
    )
}

export default PersonList;