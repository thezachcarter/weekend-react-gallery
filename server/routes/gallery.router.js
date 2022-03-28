const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data'); NO LONGER NEEDED AFTER ADDING DB
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route

//PREVIOUS ROUTE, BEFORE DATABASE
// router.put('/like/:id', (req, res) => {
// console.log(req.params);
// const galleryId = req.params.id;
// for(const galleryItem of galleryItems) {
//     if(galleryItem.id == galleryId) {
//         galleryItem.likes += 1;
//     }
// }
// res.sendStatus(200);
// }

router.put('/like/:id/:likes', (req, res) => {
    let galleryId = req.params.id;
    let galleryLikes = req.params.likes;
    galleryLikes = Number(galleryLikes) + 1;

    const queryText = `
            UPDATE "images"
            SET "likes" = $1
            WHERE "id" = $2
            `;

    pool.query(queryText, [galleryLikes, galleryId])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
        });

});
// END PUT Route

// GET Route

//PREVIOUS ROUTE, BEFORE DATABASE
// router.get('/', (req, res) => {
//     res.send(galleryItems);
//     console.log(galleryItems);

// });

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM images ORDER BY likes DESC;`;

    pool.query(queryText)
        .then((result) => {
            // console.log('in GET, got this', result);
            res.send(result.rows);
        }).catch((err) => {
            console.log('error in router GET', err);
            res.sendStatus(500);
        })
})

// END GET Route

module.exports = router;