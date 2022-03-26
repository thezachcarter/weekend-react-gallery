function GalleryList({galleryList}) {
    return (
        <>
            <ul>
                {galleryList.map(galleryItem =>
                <img src={galleryItem.path} alt={galleryItem.description}/> 
                )}
            </ul>
        </>
    )
}

export default GalleryList;