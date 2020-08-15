import React, { Component } from 'react';

class GalleryList extends Component {
    render () {
        return (
            <>
            <div className="App">
                <table>
                    <thead>
                        <tr>
                            <th id="life-photos">ph</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.GalleryList.map((photo) => {
                            console.log(photo);
                            return (
                                <tr className="gallery-row"
                                key={photo.id}>
                                    <td>{photo.name}</td>
                                </tr>
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