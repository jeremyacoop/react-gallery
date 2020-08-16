import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryList : [
      {
        path : '',
        description : '',
        likes : 0
      }
    ]
  }
  
  componentDidMount(){
    console.log('Yup!');
    this.getGalleryItems();
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

// addGalleryItems = (item) => {
//   console.log(item);
//   axios.post('/gallery', item)
//   .then((response) => {
//     console.log(response);
//     this.getGalleryItems();
//   }).catch((error) => {
//     console.log(error);
//   })
// }// end addGalleryItems

// likeGalleryItems = () => {
//   axios.put(`/gallery/${id}`)
//   .then((response) => {
//     console.log(response);
//     this.setState(prevState => ({
//       check: !prevState.check
//     })
//     this.getGalleryItems();
//   }).catch((error) => {
//       console.log(error);
//   });
//   } 

  likeGalleryItem = (id) => {
    axios.put(`/gallery/${id}`)
    .then((response) => {
      console.log(response.data.likes);
      this.getGalleryItems();
    }).catch((error) => {
      console.log(error);
    })
  }


  render() {
    console.log(this.state.galleryList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GalleryList galleryList={this.state.galleryList} likeGalleryItem={this.likeGalleryItem} />
      </div>
    );
  }
}

export default App;
