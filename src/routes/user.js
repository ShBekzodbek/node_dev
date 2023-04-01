const User = require('../controllers/user');

const router = require('express').Router()

router.post('/signup', User.signup);
// follows
router
    .route('/follows/:followsId')
    .get((req, res, next) => {
        // to get all follows
        res.status(200).send({ Message: "Your follows" });
    })
    .put((req, res, next) => {
        // for only unfollowing 
    })
router
    .route('/followers/:followersId')
    .get((req, res, next) => {
        // to get all followers
    })
    .put((req, res, next) => {
        // for only following or delete followers list
    })
router
    .route('profile/:profileId')

    .get((req, res, next) => {
        // get only one profile if he is owner of this profile give it access to change his/her profile
    })
    .put((req, res, next) => {
        // to unfollow this profile if it doesn't belongs to you else follow . if he / she is owner of this profile ,
        //he / she can change profile
    })
    .delete((req, res, next) => {
        // only owner can delete something from her / his profile like image , link , and so on
    });


module.exports = router