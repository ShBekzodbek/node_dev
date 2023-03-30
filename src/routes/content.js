const router = require('express').Router()


router.get('/', (req, res) => {
    // router code here
    res.status(200).send({ Message: 'Content route' });
});


module.exports = router