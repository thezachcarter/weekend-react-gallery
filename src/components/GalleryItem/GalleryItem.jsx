function GalleryItem({galleryItem}) {

    return(
        <>
        <li><img src={galleryItem.path} alt={galleryItem.description}/></li>
        </>
    )
}

export default GalleryItem;