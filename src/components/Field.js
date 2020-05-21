import React, { Component } from 'react';

class Field extends Component {
    render() {
        return (
            <div className="ui field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" />
            </div>
        );
    };
};

export default Field;