import GalleryItem from "../GalleryItem/GalleryItem";
import ImageList from '@mui/material/ImageList';

function GalleryList({galleryList, updateLikes}) {
    return (
        // <>
        //     {galleryList.map(galleryItem =>
        //         <GalleryItem
        //             key={galleryItem.id}
        //             galleryItem={galleryItem}
        //             updateLikes={updateLikes}
        //         />
        //     )}
        // </>

        <ImageList>
        {galleryList.map(galleryItem =>
                <GalleryItem
                    key={galleryItem.id}
                    galleryItem={galleryItem}
                    updateLikes={updateLikes}
                />
            )}
        </ImageList>


    )
}

export default GalleryList;