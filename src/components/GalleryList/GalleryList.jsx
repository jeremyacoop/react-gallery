import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <>
                <div className="gallery-list">
                    <table>
                        <thead>
                            <tr>
                                <th id="life-photos">ph</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.galleryList.map((photo) => {
                                console.log(photo);
                                return (
                                    <tr><GalleryItem key={photo.id} photo={photo} likeGalleryItem={this.props.likeGalleryItem} /></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}

export default GalleryList;