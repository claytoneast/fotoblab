var express = require('express')
var router = express.Router()

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'My First Nunjucks Page',
    items: [
      { name: 'item #1' },
      { name: 'item #2' },
      { name: 'item #3' },
      { name: 'item #4' }
    ]
  })
})

module.exports = router
