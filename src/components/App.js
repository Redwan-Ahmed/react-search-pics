import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {

    onSearchSubmit(term) {
        //console.log(term);
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query : term },
            headers: { Authorization: 'Client-ID MUumdS-0ueZ3QEueosjplUDEkf7hXkxx1UNH-bQn1Z8' }
        }).then(response => {
            // we log what object is being displayed
            console.log(response.data.results);
        });
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
    }
}

export default App;