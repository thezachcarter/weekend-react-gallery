import {useState} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// let displayItem = <img src={galleryItem.path} alt={galleryItem.description}/>;

function GalleryItem({galleryItem, updateLikes}) {
    console.log(galleryItem);

    const [itemDisplay, setItemDisplay] = useState(true);

    const displayToggle = () => {
        setItemDisplay(!itemDisplay)
    } 

    const handleLike =() => {
        console.log('Good Boy! clicked', galleryItem);
        updateLikes(galleryItem);
    }

    return(
        
            /* <div className="imageBox">
                {itemDisplay ? <img onClick={displayToggle} src={galleryItem.path} alt={galleryItem.description}/> : 
                <p onClick={displayToggle}>{galleryItem.description}</p>}           

                <button onClick={(event) => {handleLike(galleryItem)}}>Good Boy! Have a Treat!</button><p>🦴 = {galleryItem.likes}</p>
            </div> */

        

        // <div className="imageBox">
            
                <ImageListItem key={galleryItem.path}>
                    {itemDisplay ? <img
                    onClick={displayToggle}
                    src={`${galleryItem.path}?w=248&fit=crop&auto=format`}
                    srcSet={`${galleryItem.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={galleryItem.description}
                    loading="lazy"
                    /> : <p onClick={displayToggle}>{galleryItem.description}</p>}
                    
                    <ImageListItemBar
                    title={<button onClick={(event) => {handleLike(galleryItem)}}>Good Boy! Have a Treat!</button>}
                    // subtitle={<span>🦴 treats 🦴 = {galleryItem.likes}</span>}
                    position="below"
                    />
                </ImageListItem>
                
        

    )
}

export default GalleryItem;