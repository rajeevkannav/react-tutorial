import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table.js';
import Form from './Form.js';

class App extends Component {

    state = {
        characters: [
            {
                name: 'Rajeev',
                job: 'Ruby Developer'
            },
            {
                name: 'Sachin',
                job: 'Ruby Developer'
            },
            {
                name: 'Ritesh',
                job: 'Full-Stack Developer'
            },
            {
                name: 'Chandru',
                job: 'Ruby Developer'
            }
        ]
    };


    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {

        const {characters} = this.state;

        return (
            <div className="container">
                <h1>Add a character with a name and a job to the table.</h1>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>

            </div>
        );

    }
}

export default App;
