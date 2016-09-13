import React, {Component} from 'react';

//will be a controlled component
export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
        //when not using fat arrow, we need to pass the
        //component context to certain functions
        //override the local method, kinda
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        //when directly called, this has problems!
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a 5 day forecast..."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
};