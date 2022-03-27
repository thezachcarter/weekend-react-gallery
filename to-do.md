Task List
[x]Use axios to retrieve (GET) data from to /gallery and store it in App.jsx.
create a new component for the GalleryList and pass it the gallery data stored in App via props.
[x]Iterate (loop over) the list of gallery data
[x]Make GalleryItems
[x]Create a new component called GalleryItem.jsx and pass it the individual gallery item via props.
[x]Update the GalleryList to use this component to display an image.
[x]Swap the image with the description on click. Use conditional rendering.
[x]Display the number likes for each item and include a like button.
When the like button is clicked, use Axios to update (PUT) the like count /gallery/like/:id.
[x]Update the gallery each time a like button is clicked.

STRETCH GOALS (Do not start stretch base is complete)
Use Git Branching
For each feature of your application, make a branch, work on the branch, and then merge it into master with git merge --no-ff. Feel free to work on the features in any order you like. You should be making branches for whatever feature you are working on.

[ ]Move the data into a database (postgresql)
name your database react_gallery
include a database.sql file documenting your database tables
[ ]Add a form (new component) that allows a user to POST a new gallery item
[ ]Client side form (use absolute URL for images)
[ ]Server side route for posting an image
[ ]Ability to delete a gallery item
[x]Add styling with Material-UI https://material-ui.com/
[ ]Implement uppy for image upload
NOTE: The above stretch goals are intended to be completed in order.