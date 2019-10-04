const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	res.render('index.html', {titulo:'Nodejs', nav1:'Aprendiendo NodeJs'});
});

router.get('/inf', (req, res) => {
	res.render('inf.html', {titulo:'Information', nav1:'Information de pagina'});
});

router.get('/aniv', (req, res) => {
	res.render('aniv.html', {titulo:'Aniversario', nav1:'Datos de Aniversario'});
});

module.exports = router;
