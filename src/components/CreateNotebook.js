import React from 'react';
import PropTypes from 'prop-types';

class Notebook extends React.Component {

    notebookInput = React.createRef();

    formatDate = () => {
        const date = new Date();
        const options = {
            day: 'numeric',
            year: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    };

    createNotebook = (event) => {
        event.preventDefault();

        const inputValue = this.notebookInput.current.value;

        const notebook = {
            name: inputValue,                                                 // Name
            link: `/notebook/${encodeURIComponent(inputValue)}`,              // Link
            created: this.formatDate(),                                       // Creation Date
            uid: Date.now()                                                   // Unique ID number
        };

        // Check the state property and see if the name already exists
        // If it is a duplicate return an alert and don't add the notebook to state
        for(let i = 0; i < this.props.notebooks.length; i++) {
            if(notebook.name.toLowerCase() === this.props.notebooks[i].name.toLowerCase()) {
                return alert('Notebook name is already in use.');
            }
        }

        // Pass Notebook to State
        this.props.addNotebook(notebook);
    };

    render() {
        return (
            <form className="create-notebook-form" onSubmit={this.createNotebook}>
                <h2>Create a New Notebook</h2>
                <input
                    type="text"
                    ref={this.notebookInput}
                    required
                    placeholder="Create a new notebook"
                />
                <button type="submit">Make Notebook</button>
            </form>
        );
    };
}

export default Notebook;