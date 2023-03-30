

const router = require('express').Router()

router
    .route('profile/:id')

    .get((req, res, next) => {
        // get only one profile if he is owner of this profile give it access to change his/her profile
    })
    .put((req, res, next) => {
        // to unfollow this profile if it doesn't belongs to you else follow . if he / she is owner of this profile ,
        //he / she can change profile
        // to change someone profile , or ban user if he /she deserve
    })
    .delete((req, res, next) => {
        // only admin can delete something from her / his profile like image , link , and so on
    });


module.exports = router