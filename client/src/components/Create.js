import React, { useState } from 'react';
import axios from 'axios';

/*
Here is the create form :
- name input
- nickname input
- description input
- submit inpuy
*/
function Create() {

    const [personName, setPersonName] = useState('');
    const [personNickName, setPersonNickName] = useState('');
    const [personDescription, setPersonDescription] = useState('');

    // To get the name
    function handlePersonName(e) {
        setPersonName(e.target.value);
    }

    // To get the nickname
    function handlePersonNickName(e) {
        setPersonNickName(e.target.value)
    };

    // To get the description
    function handlePersonDescription(e) {
        setPersonDescription(e.target.value);
    }

    // Submit the person
    async function handleSubmit(e) {
        e.preventDefault();

        const obj = {
            personName,
            personNickName,
            personDescription
        };

        // Call add api
        try {
            await axios.post('/api/person/add', obj);
        } catch (err) {
            console.error(err.message);
        }

        // Empty back the fields
        setPersonName('');
        setPersonNickName('');
        setPersonDescription('');

         // Refresh the page
         window.location.reload();
    }

    return (
        <div className="create-container">
            <h3 className="create-container__title">Add new item</h3>

            <form className="create-container__form" onSubmit={handleSubmit}>

                <div className="create-container__form-group">
                    <label className="create-container__label">Add a name</label>
                    <input
                        type="text"
                        className="create-container__input"
                        value={personName}
                        onChange={handlePersonName}
                    />
                </div>

                <div className="create-container__form-group">
                    <label className="create-container__label">Add a nickname</label>
                    <input
                        type="text"
                        className="create-container__input"
                        value={personNickName}
                        onChange={handlePersonNickName}
                    />
                </div>

                <div className="create-container__form-group">
                    <label className="create-container__label">Add a description</label>
                    <input
                        type="text"
                        className="create-container__input"
                        value={personDescription}
                        onChange={handlePersonDescription}
                    />
                </div>

                <div className="create-container__form-group">
                    <input type="submit" value="Submit" className="create-container__submit" />
                </div>
            </form>
        </div>
    )
}

export default Create;


/*
import React, { Component } from 'react';
import axios from 'axios';


Here is the create form :
- name input
- nickname input
- description input
- submit inpuy

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
            await axios.post('/api/person/add', obj);
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
        window.location.reload();
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
            </div>
        )
    }
}

export default Create;
*/