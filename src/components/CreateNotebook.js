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

        const notebook = {
            name: this.notebookInput.current.value,
            created: this.formatDate(),
            uid: Date.now()
        };
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