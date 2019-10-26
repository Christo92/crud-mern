import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {

    state = {
        personName: '',
        personNickName: '',
        personDescription: ''
    };

    async componentDidMount() {
        try {
            const editPerson = await axios.get(`/api/person/edit/${this.props.match.params.id}`);
            let editPersonData = editPerson.data;

            this.setState({
                personName: editPersonData.personName,
                personNickName: editPersonData.personNickName,
                personDescription: editPersonData.personDescription
            });

        } catch (err) {
            console.error(err.message)
        }
    }

    handlePersonName = (e) => {
        this.setState({
            personName: e.target.value
        })
    };

    handlePersonNickname = (e) => {
        this.setState({
            personNickName: e.target.value
        })
    };

    handlePersonDescription = (e) => {
        this.setState({
            personDescription: e.target.value
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            personName: this.state.personName,
            personNickName: this.state.personNickName,
            personDescription: this.state.personDescription
        };

        try {
            await axios.post(`/api/person/update/${this.props.match.params.id}`, obj);
        } catch (err) {
            console.log(err.message)
        }

        // After update go back to the list
        this.props.history.push('/create')
    }

    render() {
        return (
            <div>
                <h3>Update person</h3>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Person Name:</label>
                        <input 
                            type="text"
                            value={this.state.personName}
                            onChange={this.handlePersonName}
                        />
                    </div>

                    <div>
                        <label>Person Nickname:</label>
                        <input 
                            type="text"
                            value={this.state.personNickName}
                            onChange={this.handlePersonNickname}
                        />
                    </div>

                    <div>
                        <label>Person Description:</label>
                        <input 
                            type="text"
                            value={this.state.personDescription}
                            onChange={this.handlePersonDescription}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit"
                            value="Update person"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit;