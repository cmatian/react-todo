import React from 'react';
import PropTypes from 'prop-types';

class CreateNotebook extends React.Component {

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

    formatLink = (input) => {
        let link = input.toLowerCase();
        // Replace Space With - for hyperlink
        link = link.replace(/\s+/g, "-");
        return `/notebook/${link}`
    };

    createNotebook = (event) => {
        event.preventDefault();

        const inputValue = (this.notebookInput.current.value).replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"");

        const notebook = {
            name: inputValue,
            link: this.formatLink(inputValue),
            created: this.formatDate(),
            uid: Date.now()
        };

        // Check the state property and see if the name already exists
        // If it is a duplicate return an alert and don't add the notebook to state
        const keys = Object.keys(this.props.collection);
        for (const key of keys) {
            if(key === notebook.name) {
                return alert('That notebook already exists, please use a different name.');
            }
        }

        // Add the notebook to the state "collection"
        this.props.addNotebook(notebook);

        event.currentTarget.reset();
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

export default CreateNotebook;