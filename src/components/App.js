import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: [] };

   onSearchSubmit = async term => {
        //console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: { query : term }
        });
        // storing the response data inside the state images array
        this.setState({ images: response.data.results });
    }

    render() {
        return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
        </div>
        );
    }
}

export default App;