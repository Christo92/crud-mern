import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
// Component
import Person from './Person';

class PersonList extends Component {

    state = {
        persons: []
    }

    async componentDidMount() {
        try {
            const personList = await axios.get('/api/person/list');
            let personData = personList.data;

            this.setState({
                persons: personData
            });

            console.log(this.state.persons)
            
        } catch (error) {
            console.error(error.message)
        }
    };

    displayPersons = () => {
        if (this.state.persons.length > 0) {
            return this.state.persons.map(person => (
                <Person key={uuid()} person={person}/>
            ))
        } else {
            return <div>The list is empty</div>
        }
    }

    render() {
        return (
            <div>
                {this.displayPersons()}
            </div>
        )
    }
}

export default PersonList;