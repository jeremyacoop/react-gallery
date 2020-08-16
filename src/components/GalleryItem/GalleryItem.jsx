import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        return (
            <>
                {/* <h2>Photographs of significant value to my person</h2> */}
                {/* <div><img src={require()}></img><button className="like-button" >Like!</button> </div> */}
                <td className="gallery-row">
                    <div><img src={this.props.photo.path}  alt="placeholder"/> <br/>
                    {this.props.photo.description}<br />
                    <button className="like-button" onClick={(event) => {this.props.likeGalleryItem(this.props.photo.id)}}>Like!</button></div>
                                </td>
            </>
        )
    }
}

export default GalleryItem;