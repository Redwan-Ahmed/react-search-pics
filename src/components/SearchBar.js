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
                <div className="ui fluid icon input">
                    <input
                    className="prompt" 
                    type="text"
                    placeholder="search for anything..." 
                    value={this.state.term} 
                    onChange={(e) => this.setState({ term: e.target.value })}/>
                    <i className="search icon"></i>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;