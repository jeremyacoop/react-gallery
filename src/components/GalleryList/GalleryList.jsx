import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <>
                <section className="gallery-list">
                <div className="gallery-row" >
                            {this.props.galleryList.map((photo) => {
                                console.log(photo);
                                return (
                                    <GalleryItem 
                                    key={photo.id} 
                                    photo={photo} 
                                    likeGalleryItem={this.props.likeGalleryItem} 
                                    // swapElements={this.props.swapElements} 
                                    />
                                )
                            })}
                                </div>
                                </section>
            </>
        )
    }
}

export default GalleryList;