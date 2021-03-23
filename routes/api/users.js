const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');

// @route GET api/users 
// @desc Rgister user
// @access Public
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','please use a valid email').isEmail(),
    check('password','Please enter the password with 6 or more digit').isLength({min:6})
],(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    res.send('User route');
});
module.exports = router;