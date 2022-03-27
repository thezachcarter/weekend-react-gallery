import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
          <CssBaseline />
          <header className="App-header">
            <h1 className="App-title">GORDO <span className="App-subtitle">the dog...</span></h1>
          </header>
          <Container maxWidth="sm" maxHeight="sm">
            <GalleryList 
              galleryList={galleryList}
              updateLikes={updateLikes}
            />
          </Container>
        </div>
      
    );
}

export default App;
