const express = require('express');
const verify = require('../model/fieldsVerify');
const calc = require('../configs/verifyConcessionaire');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('concessionaires');
});

router.post('test', (req, res) => {
    verify.concessionaires(req.body)
        .then((body) => {
        
        })
        .catch((e) => {
            if (e.isJoi) {
                console.log(e);
                e = 'Insert the numbers correctly in the fields';
            } else {
                res.render('concessionaires', { error: true, description: e });
            };
        });
})


modeule.exports = router;