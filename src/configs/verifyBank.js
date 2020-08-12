const verifyBank = {

    verifyDV: (field1, field2) => {
        let fieldFilled = field1 + field2.substr(0, field2.length-1);
        let dv = field2[field2.length - 1];

        let dvTest = 0;
        let mult = 2;

        for (let i = fieldFilled.length - 1; i >= 0; i--) {
            dvTest += Number(fieldFilled[i]) * mult;
            
            if (Number(fieldFilled[i]) * mult > 9) {
                dvTest -= 9;
            };
            
            if (mult == 2) {
                mult--;
            } else {
                mult++;
            };
        };

        dvTest = (Math.ceil(dvTest / 10) * 10) - dvTest;

        if (dv == dvTest) {
            return true;
        } else {
            return false;
        };
    },

    getCodeBar: (fields) => {
        
        let bankAndCurrency = fields.field1i.substr(0, 4);
        
        let dvCodeBar = fields.field4;

        let dueDateAndValue = fields.field5;

        let from20to24 = fields.field1i[fields.field1i.length-1] + fields.field1ii.substr(0, fields.field1ii.length - 1);

        let from25to34 = fields.field2i + fields.field2ii.substr(0, fields.field2ii.length - 1);

        let from35to44 = fields.field3i + fields.field3ii.substr(0, fields.field3ii.length - 1);

        return (bankAndCurrency + dvCodeBar + dueDateAndValue + from20to24 + from25to34 + from35to44);
    },

    codeBarVerify: (codeBar) => {
        
        let codeBarWithoutDv = codeBar.substr(0, 4) + codeBar.substr(5, 39);
            
        let dvCodeBar = Number(codeBar[4]);

        let dvTest = 0;

        let mult = 2;

        for (let i = 42; i >= 0; i--) {
            dvTest += Number(codeBarWithoutDv[i]) * mult;

            if (mult == 9) {
                mult = 2;
            } else {
                mult++;
            };

        };

        dvTest = 11 - (dvTest % 11);

        if (dvTest == 0 || dvTest > 9) {
            dvTest = 1
        };

        if (dvTest == dvCodeBar) {
            return true;
        } else {
            return false;
        };
    },

    dueDateValue: (date, value) => {
        let initialDate = new Date('10/07/1997');

        let dueDate = new Date(initialDate);

        dueDate.setDate(dueDate.getDate() + Number(date));

        let finalValue = Number(value) / 100;
        
        return { due: `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`, value: finalValue };
    }

};

module.exports = verifyBank;