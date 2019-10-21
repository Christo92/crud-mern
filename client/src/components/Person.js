import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Person extends Component {

    handleDelete = async () => {
        try {
            await axios.get(`/api/person/delete/${this.props.person._id}`)  
        } catch (err) {
            console.log(err.message)
        }

        window.location.reload(); 
    }

    render() {
        return (
            <div>
                <p>Name: <span>{this.props.person.personName}</span></p>
                <p>Nickname: <span>{this.props.person.personNickName}</span></p>
                <p>Description: <span>{this.props.person.personDescription}</span></p>
                <Link to={`/edit/${this.props.person._id}`}>Edit</Link>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Person;