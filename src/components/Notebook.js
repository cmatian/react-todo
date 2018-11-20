import React from 'react';
import CreateNotebook from './CreateNotebook';
import { Link } from "react-router-dom";
import base from '../base';
import PropTypes from 'prop-types';

class Notebook extends React.Component {

    // State maintains a collection of notebooks
    // - Each index contains a notebook name, uid, and creation date
    state = {
        collection: {}
    };

    // Component Mounting Method's
    componentDidMount() {

        const localStorageRef = localStorage.getItem("Notebooks");

        if(localStorageRef) {
            this.setState({
                collection: JSON.parse(localStorageRef)
            })
        }

        this.ref = base.syncState(`/`, {
            context: this,
            state: 'collection'
        });
    }

    componentDidUpdate() {

        const params = {...this.state.collection};

        localStorage.setItem(
            "Notebooks",
            JSON.stringify(params)
        );
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    };


    addNotebook = (notebook) => {

        const collection = {...this.state.collection};

        collection[`${notebook.name}`] = notebook;

        this.setState({ collection });
    };

    deleteNotebook = (notebookKey) => {
        // Copy of State
        const collection = {...this.state.collection};

        // Set the item to null
        collection[notebookKey] = null;

        // Update State with the updated array
        this.setState({ collection });
    };

    render() {
        return (
            <div className="notebook-collection">
                <CreateNotebook
                    addNotebook={this.addNotebook}
                    notebooks={this.state.collection}
                />
                <h2>Notebook Collection [{Object.keys(this.state.collection).length}]</h2>
                {Object.keys(this.state.collection).map(key => (
                    <div key={key}>
                        <Link to={this.state.collection[key].link}>{this.state.collection[key].name}</Link>
                        <button onClick={() => this.deleteNotebook(key)}>Delete</button>
                    </div>
                ))}
            </div>
        );
    };
}

export default Notebook;