const verifyConcessionaire = {

    verifyDV: (field, dv, modDAC) => {
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
        
        if (modDAC == 10) {
            dvTest = (Math.ceil(dvTest / 10) * 10) - dvTest;
        };

        if (modDAC == 11) {
            dvTest = dvTest % 11;

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

    dueDateValue: (codeBar) => {
        let dueDate, value;

        if (codeBar[1] == '6') {
            dueDate = codeBar.substr(26, 8);
        } else {
            dueDate = codeBar.substr(19, 8);
        };

        value = Number(codeBar.substr(4, 11)) / 100;
        console.log(`${dueDate[6] + dueDate[7]}/${dueDate[4] + dueDate[5]}/${dueDate[0] + dueDate[1] + dueDate[2] + dueDate[3]}`)
        return { DueDate: `${dueDate[6] + dueDate[7]}/${dueDate[4] + dueDate[5]}/${dueDate[0] + dueDate[1] + dueDate[2] + dueDate[3]}`, value: value };
    }




};

module.exports = verifyConcessionaire;
