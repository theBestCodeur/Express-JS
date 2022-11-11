var express = require('express');
var router = express.Router();



const openService = (req,res,next) => {
  const todate = new Date();
  const today = todate.getDay();
  const hour = todate.getHours();

  const openDays = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

  for (day in openDays){
      if (day == today-1) {
      if (hour >= 9 && hour <= 17){
      next();
    }
  }
}
res.render('unavailable',{ title: 'Unavailable Page', description : "How to learn" });
}
router.use(openService);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express js', description : "How to learn" });
});

router.get('/service',function(req,res,next){
  res.render('service')
})
router.get('/contact',function(req,res,next){
  res.render('contact')
})

module.exports = router;
