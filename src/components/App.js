import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

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
            <a href="/">
                <h1 style={{ paddingTop: '10px', textAlign: 'center', color: 'black' }} >Image Search Engine</h1>
            </a>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>
        );
    }
}

export default App;