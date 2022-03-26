import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
      getItems();
  }, []);

  const getItems = () => {
    axios.get('/gallery')
    .then(response => {
      setGalleryList(response.data);
      // console.log(response);
    })
    .catch(err => {
      console.log('Error in app GET,', err)
    })
  }

  const updateLikes = (itemToUpdate) => {
    console.log('Update Likes in app');
    axios.put(`/gallery/like/${itemToUpdate.id}`)
    .then(response => {
        getItems();
        console.log('Updated', itemToUpdate)
    }).catch(err => {
        console.log('Error in update', err);
    })

}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery</h1>
        </header>
          <GalleryList 
            galleryList={galleryList}
            updateLikes={updateLikes}
          />
      </div>
    );
}

export default App;
