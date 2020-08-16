import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        isPhoto : true,
    }

    swapElements = () => {
        this.setState({
            isPhoto : !this.state.isPhoto
        })
    }

    render() {
        return (
            <>
                {/* <h2>Photographs of significant value to my person</h2> */}
                {/* <div><img src={require()}></img><button className="like-button" >Like!</button> </div> */}
                    <div className="gallery-item">
                        <button 
                        // className="swap-elements" 
                        onClick={this.swapElements}>
                            {this.state.isPhoto ? 
                        <img src={this.props.photo.path}  alt="placeholder"/> : <div>{this.props.photo.description}</div>} </button> <br/>
                    {/* {this.props.photo.description}<br /> */}
        <button className="like-button" onClick={(event) => {this.props.likeGalleryItem(this.props.photo.id)}}>Like!</button><br />{this.props.photo.likes} people like this</div>
            </>
        )
    }
}

export default GalleryItem;