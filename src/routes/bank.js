const express = require('express');
const verify = require('../model/fieldsVerify');
const calc = require('../configs/verifyBank');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('bank');
});

router.post('/test', (req, res) => {
    verify.banks(req.body)
    .then((body) => {
        
            let testDV1 = calc.verifyDV(req.body.field1i, req.body.field1ii);
            let testDV2 = calc.verifyDV(req.body.field2i, req.body.field2ii);
            let testDV3 = calc.verifyDV(req.body.field3i, req.body.field3ii);

            if (testDV1 && testDV2 && testDV3) {
                let codeBar = calc.getCodeBar(body);

                if (calc.getCodeBar(codeBar)) {
                    let data = calc.dueDateValue(req.body.field5.substr(0, 4), req.body.field5.substr(4, 10));
                    data.codeBar = codeBar;

                    if (data.value <= 0) {
                        res.render('bank', { error: true, description: 'the Bank security value is less than 0' });
                    } else {
                        res.render('bank', { success: true, data: data });
                    };
                } else {
                    res.render('bank', { error: true, description: 'The barcode check digit does not match' });
                };
            } else {
                res.render('bank', { error: true, description: 'The check digits of the digitable line do not match' });
            };
        })
        .catch((e) => {
   
            if (e.isJoi) {
                e = 'Enter the numbers correctly in the fields'
            };

            res.render('bank', { error: true, description: e })
        });
});

module.exports = router;