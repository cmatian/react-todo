import React from 'react';
import PropTypes from 'prop-types';

class Notebook extends React.Component {

    notebookInput = React.createRef();

    loadNotebook = (event) => {
        // 1. Prevent Page Refresh
        event.preventDefault();
        // 2. Grab Input
        const notebookName = this.notebookInput.current.value;
        // 3. Route to Notebook
        this.props.history.push(`/notebook/${notebookName}`);
    };

    render() {
        return (
            <form className="create-notebook-form" onSubmit={this.loadNotebook}>
                <h2>Create a New Notebook</h2>
                <input
                    type="text"
                    ref={this.notebookInput}
                    required
                    placeholder="Create a notebook"
                />
                <button type="submit">Make Notebook</button>
            </form>
        );
    };
}

export default Notebook;