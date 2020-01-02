const express = require ('express');
const router = express.Router(); 

//Routes
router.get('/', (req, res) =>{
    res.render('index.ejs', {title: 'My website'})
    
});

router.get('/contact', (req, res) =>{
    res.render('contact.ejs', {title: 'Contact'})
    
});

module.exports = router;