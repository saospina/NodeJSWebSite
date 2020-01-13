const express = require ('express');
const router = express.Router(); 

//Routes
router.get('/', (req, res) =>{
    res.render('index.html', {title: "Sergio's website"})
    
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', {title: 'Contact'})
    
});

module.exports = router;