var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})

/* GET home page. */
router.get('/list', function(req, res, next) {
  pool.query('SELECT * FROM word',function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows);
  })
});

router.post('/add',function(req,res){
  var tit=req.body.tit;
  var _m=req.body._m;
  console.log(2)
  pool.query('INSERT INTO word(title,message) VALUES("'+tit+'","'+_m+'")',function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows)
  })
});


router.post('/del',function(req,res){
  var id=req.body.id;
  pool.query('DELETE FROM word WHERE id='+id,function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows)
  })
})

module.exports = router;
