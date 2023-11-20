const router = require('express').Router();
const developers = require('../data/developers');

router.get('/', (req, res) => {
    try{
        res.status(200).json(developers);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;