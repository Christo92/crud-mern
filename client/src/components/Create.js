import React, { Component } from 'react';
import axios from 'axios';
// Component
import PersonList from './PersonList';

/*
Here is the create form :
- name input
- nickname input
- description input
- submit inpuy
*/
class Create extends Component {

    state = {
        personName: '',
        personNickName: '',
        personDescription: ''
    };

    // To get the name
    handlePersonName = (e) => {
        this.setState({
            personName: e.target.value
        });
    };

    // To get the nickname
    handlePersonNickName = (e) => {
        this.setState({
            personNickName: e.target.value
        });
    };

    // To get the description
    handlePersonDescription = (e) => {
        this.setState({
            personDescription: e.target.value
        });
    };

    // Submit the person
    onSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            personName: this.state.personName,
            personNickName: this.state.personNickName,
            personDescription: this.state.personDescription
        };

        // Call add api
        try {
            const addperson = await axios.post('/api/person/add', obj);
            console.log(addperson.data);
        } catch (err) {
            console.error(err.message);
        }

        // Empty back the fields
        this.setState({
            personName: '',
            personNickName: '',
            personDescription: ''
        })

        // Push to list page
        this.props.history.push('/list')
    };

    render() {
        return (
            <div className="create-container">
                <h3 className="create-container__title">Add new item</h3>

                <form className="create-container__form" onSubmit={this.onSubmit}>

                    <div className="create-container__form-group">
                        <label className="create-container__label">Add a name</label>
                        <input 
                            type="text" 
                            className="create-container__input"
                            value={this.state.personName}
                            onChange={this.handlePersonName}
                        />
                    </div>

                    <div className="create-container__form-group">
                        <label className="create-container__label">Add a nickname</label>
                        <input 
                            type="text" 
                            className="create-container__input"
                            value={this.state.personNickName}
                            onChange={this.handlePersonNickName}
                        />
                    </div>

                    <div className="create-container__form-group">
                        <label className="create-container__label">Add a description</label>
                        <input 
                            type="text" 
                            className="create-container__input"
                            value={this.state.personDescription}
                            onChange={this.handlePersonDescription}
                        />
                    </div>
                    
                    <div className="create-container__form-group">
                        <input type="submit" value="Submit" className="create-container__submit"/>
                    </div>
                </form>

                <PersonList />
            </div>
        )
    }
}

export default Create;