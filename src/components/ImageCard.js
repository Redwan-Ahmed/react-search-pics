import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = { spans: 0 };
        //creating an image ref (so we can add on to the img below)
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // we cannot log the image height(clientHeight) because we have to wait for the image to load.
        // thus we use a JS event listener to listen for 'load'.
        // we then pass in a new class (setSpans) which is logs the image height.
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;