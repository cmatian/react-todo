import React from 'react';
import CreateNotebook from './CreateNotebook';
import base from '../base';
import PropTypes from 'prop-types';

class Notebook extends React.Component {

    // State maintains a collection of notebooks
    // - Each index contains a notebook name, uid, and creation date
    state = {
        collection: []
    };

    addNotebook = (notebook) => {
        this.setState({
            collection: [...this.state.collection, notebook]
        });
    };

    componentDidUpdate() {
        // Do Nothing Yet
    }

    render() {
        return (
            <div className="notebook-collection">
                <CreateNotebook
                    addNotebook={this.addNotebook}
                    notebooks={this.state.collection}
                />
                <h2>Notebook Collection [{this.state.collection.length}]</h2>
                {Object.keys(this.state.collection).map(key => (
                    <div key={key}>
                        {this.state.collection[key].name}
                    </div>
                ))}
            </div>
        );
    };
}

export default Notebook;