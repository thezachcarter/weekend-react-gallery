import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// let displayItem = <img src={galleryItem.path} alt={galleryItem.description}/>;

function GalleryItem({galleryItem, updateLikes}) {
    console.log(galleryItem);

    const [itemDisplay, setItemDisplay] = useState(true);
    const [btnDisplay, setBtnDisplay] = useState(true);

    const displayToggle = () => {
        setItemDisplay(!itemDisplay)
    } 

    const handleLike =() => {
        console.log('Good Boy! clicked', galleryItem);
        updateLikes(galleryItem);
        setBtnDisplay(false);
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
                    /> : <p className="Description" onClick={displayToggle}>
                        <u>{galleryItem.description}</u></p>}

                    {btnDisplay ?
                    <ImageListItemBar
                    title={<Button onClick={(event) => {handleLike(galleryItem)}} variant="outlined">Good Boy! Have a Treat!</Button>}
                    position="below"
                    />
                    :
                    <ImageListItemBar
                    title={<Button>🦴 total treats : {galleryItem.likes} 🦴</Button>}
                    position="below"
                    />
                    }
                </ImageListItem>  

    )
}

export default GalleryItem;