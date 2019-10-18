import React, { Component } from 'react';

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
            personName: e.targer.value
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

    onSubmit = (e) => {
        e.preventDefault();
        console.log(`Value ${this.state.personName}, 
        ${this.state.personNickName}, ${this.state.personDescription}`);
        this.setState({
            personName: '',
            personNickName: '',
            personDescription: ''
        })
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