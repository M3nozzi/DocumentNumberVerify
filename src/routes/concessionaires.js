const express = require('express');
const verify = require('../model/fieldsVerify');
const calc = require('../configs/verifyConcessionaire');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('concessionaires');
});

router.post('/test', (req, res) => {
    verify.concessionaires(req.body)
        .then((body) => {
            let modDAC;
            if (body.field1[2] == '6' || body.field1[2] =='7') {
                modDAC = 10;
            } else if (body.field1[2] == '8' || body.field1[2] =='9') {
              modDAC = 11;
            };

            if (modDAC) {
                let dv1 = calc.verifyDV(body.field1, body.field1dv, modDAC);
                let dv2 = calc.verifyDV(body.field2, body.field2dv, modDAC);
                let dv3 = calc.verifyDV(body.field3, body.field3dv, modDAC);
                let dv4 = calc.verifyDV(body.field4, body.field4dv, modDAC);

                if (dv1 && dv2 && dv3 && dv4) {
                    let codeBar = body.field1 + body.field2 + body.field3 + body.field4;

                    if (calc.verifyDV((codeBar.substr(0, 3) + codeBar.substr(4, 40)), codeBar[3], modDAC)) {
                        let data = calc.dueDateValue(codeBar);

                        data.codeBar = codeBar;
               
                        if (data.value <= 0) {
                            res.render('concessionaires', {error: true, description: 'Bank note value is less than zero'})
                        } else {
                            
                            res.render('concessionaires', { success: true, data: data });
                            // res.json(data)
                        };
                    } else {
                        res.render('concessionaires',{error: true, description: 'The barcode check digit does not match'});
                    };
                } else {
                    res.render('concessionaires',{error: true, description: 'The check digits of the line entered is not valid'});
                };
                
            } else {
                res.render('concessionaires',{error: true, description: 'It is invalid'});
            };
        
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

module.exports = router;
