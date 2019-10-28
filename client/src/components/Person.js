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

        this.props.rerender();

        window.location.reload(); 
    }

    render() {
        return (
            <div className="personlist-container__block-person">
                <p className="personlist-container__block-person-firstname">Firsname: <span>{this.props.person.personName}</span></p>
                <p className="personlist-container__block-person-nickname">Nickname: <span>{this.props.person.personNickName}</span></p>
                <p className="personlist-container__block-person-description">Description: <span>{this.props.person.personDescription}</span></p>
                <div className="personlist-container_buttons">
                    <Link to={`/edit/${this.props.person._id}`} className="personlist-container__block-person-editbutton">Edit</Link>
                    <button onClick={this.handleDelete} className="personlist-container__block-person-deletebutton">Delete</button>
                
                </div>
            </div>
        )
    }
}

export default Person;