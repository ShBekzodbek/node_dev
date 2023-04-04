const router = require('express').Router()


router
    .route('/follows/:contentId')
    .get((req, res, next) => {
        // get all content which belongs to my followings
    })
    .put((req, res, next) => {
        // like or comment them
    })


module.exports = router