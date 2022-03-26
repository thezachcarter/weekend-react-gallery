import {useState} from 'react';

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
        <>
            <div className="imageBox">
                {itemDisplay ? <img onClick={displayToggle} src={galleryItem.path} alt={galleryItem.description}/> : 
                <p onClick={displayToggle}>{galleryItem.description}</p>}           

                <button onClick={(event) => {handleLike(galleryItem)}}>Good Boy! Have a treat!</button><p>🦴 = {galleryItem.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem;