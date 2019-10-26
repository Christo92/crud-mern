import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
// Component
import Person from './Person';
import Create from './Create';

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
            
        } catch (error) {
            console.error(error.message)
        }
    };

    // Iterate in persons array to show each
    displayPersons = () => {
        if (this.state.persons.length > 0) {
            return this.state.persons.map(person => (
                <Person key={uuid()} person={person}/>
            ))
        } else {
            return <div>The list is empty</div>
        }
    }

    displayButtonDelete = () => {
        if (this.state.persons.length > 0) {
            return <button onClick={this.deleteAllPersons}>Delete All</button>
        }
    }

    // Delete All persons on list
    deleteAllPersons = async () => {
        try {
            await axios.get('/api/person/deleteAll');
            
            this.setState({
                persons: []
            })
            
        } catch (err) {
            console.log(err.message)
        }
    }

    render() {
        return (
            <div>
            <Create refreshState={this.refreshState}/>
                {this.displayButtonDelete()}
                {this.displayPersons()}
            </div>
        )
    }
}

export default PersonList;