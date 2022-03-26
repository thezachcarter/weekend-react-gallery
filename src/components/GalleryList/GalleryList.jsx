import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    return (
        <>
            <ul>
                {galleryList.map(galleryItem =>
                    <GalleryItem
                        key={galleryItem.id}
                        galleryItem={galleryItem}
                    />
                )}
            </ul>
        </>
    )
}

export default GalleryList;