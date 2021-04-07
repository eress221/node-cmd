var express = require('express');
var router = express.Router();
var cmd = require('node-cmd');
var iconv = require('iconv-lite');

/* GET home page. */
router.get('/', function(req, res, next) {
    cmd.run('chcp 65001');
  cmd.get(
      'ipconfig',
      function (err, data, stderr) {
          var temp = iconv.decode(data, 'utf8');
          console.log(data);
          console.log(temp);
          res.render('index', { title: 'Express', data: temp });
      }
  );
});

module.exports = router;
