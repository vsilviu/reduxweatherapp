import React, {Component} from 'react';

//will be a component
export default class SearchBar extends Component {
    render() {
        return (
            <form className="input-group">
                <input/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
};