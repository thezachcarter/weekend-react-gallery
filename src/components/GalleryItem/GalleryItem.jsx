import {useState} from 'react';

// let displayItem = <img src={galleryItem.path} alt={galleryItem.description}/>;

function GalleryItem({galleryItem}) {
    console.log(galleryItem);

    const [itemDisplay, setItemDisplay] = useState(true);

    const displayToggle = () => {
        setItemDisplay(!itemDisplay)
    } 

    return(
        <div className="imageBox" onClick={displayToggle}>
            {itemDisplay ? <img src={galleryItem.path} alt={galleryItem.description}/> : 
            <p>{galleryItem.description}</p>}
        </div>
    )
}

export default GalleryItem;