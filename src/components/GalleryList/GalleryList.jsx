import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, updateLikes}) {
    return (
        <>
            {galleryList.map(galleryItem =>
                <GalleryItem
                    key={galleryItem.id}
                    galleryItem={galleryItem}
                    updateLikes={updateLikes}
                />
            )}
        </>
    )
}

export default GalleryList;