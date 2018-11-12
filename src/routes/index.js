const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { title: 'AdHoc ' })
   
 });

 router.get('/contact', (req, res) => {
    res.render('contact.html', {title: "Contactanos" });
   
 });


 module.exports = router;