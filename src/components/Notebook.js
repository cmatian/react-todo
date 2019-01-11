import React from 'react';
import { Link } from "react-router-dom";

class Notebook extends React.Component {

    state = {
        isInEditMode: false
    };

    // Handle Display of the Input for editing
    editNotebook = () => {
        //1.
        if(this.state.isInEditMode === true) {
            // Do Something
            console.log("Message while in Edit Mode");
        }

        // 2. Update the State of the Edit Fields
        this.setState(prevState => ({
                isInEditMode: !prevState.isInEditMode
            })
        );
    };

    sendPayload = (updatedNotebook) => {
        this.props.updatdNotebook(this.props.index, updatedNotebook);
    };

    handleChange = (event) => {

        const updatedNotebook = {
            ...this.props.collection[this.props.index],
            name: event.currentTarget.value
        };

        console.log(updatedNotebook);

        // 1. We have to update the name of the notebook
        //this.props.updateNotebook(this.props.index, updatedNotebook);
        // 2. We have to update the link of the notebook
    };

    render() {
        return(
            <div>
                {this.state.isInEditMode === true ?
                    <input onChange={this.handleChange} defaultValue={this.props.collection[this.props.index].name}/> :
                    <Link to={this.props.collection[this.props.index].link}>{this.props.collection[this.props.index].name}</Link>
                }
                <button onClick={this.editNotebook}>{this.state.isInEditMode === true ? "Save" : "Edit"}</button>
                <button onClick={() => this.props.deleteNotebook(this.props.index)}>Delete</button>
            </div>
        );
    };
}

export default Notebook;