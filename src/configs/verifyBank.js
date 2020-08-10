const verifyBank = {

    verifyDV: (field1, field2) => {
        let completeField = field1 + field2.substr(0, field2.length - 1);
        let dv = field2[field2.length - 1];

        let dvTest = 0;
        let mult = 2;

        for (let i = field.length - 1; i >= 0; i--){
            dvTest += Number(field[i]) * mult;
            
            if (modDAC == 10) {
                if ((Number(field[i]) * mult) > 9) {
                    dvTest -= 9;
                };
                
                if (mult == 2) {
                    mult--;
                } else {
                    mult++;
                };
            };

            if (modDAC == 11) {
                if (mult == 9) {
                    mult = 2;
                } else {
                    mult++;
                };
            };

        };

        if (modDAC == 11) {
            dvTest = devTest % 11;

            if (dvTest == 1) {
                dvTest = 0;
            } else if (dvTest == 10) {
                dvTest = 1;
            };
        };

        if (dv == dvTest) {
            return true;
        } else {
            return false;
        };

    },
    

    

};

module.exports = verifyBank;