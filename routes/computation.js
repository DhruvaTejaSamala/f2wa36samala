var express = require('express');
var router = express.Router();
var r  = Math.floor(Math.random() * (10));

function tanInverse(ratio) {
    return Math.atan(ratio)*(180/Math.PI);
  } 
/* GET users listing. */
router.get('/', function(req, res, next) {
    r= Math.floor(Math.random() * 10);
    res.send('tanInverse of ('+ r +') is '+ tanInverse(r)+' Degrees' )
});

module.exports = router;
