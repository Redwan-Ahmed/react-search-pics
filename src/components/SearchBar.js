import React from "react";

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (event) => {
// we want to stop the default action which submits data and refreshes the screen when we press enter.
        event.preventDefault();

//passing in the state term into the props so the parent component (app.js) can invoke the component and get the state.
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={(e) => this.setState({ term: e.target.value })}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;