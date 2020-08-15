import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import galleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList : [],
    galleryItem: {

    }
  }

  getGalleryItems = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log(response.data);
      this.setState({
        galleryList : response.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }// end getGalleryItems

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
