const verifyConcessionaire = {

    verifyDV: (field, dv, modDAC) => {
        let dvTest = 0;
        let mult = 2;

        for (let i = field.length - 1; i >= 0; i--){
            dvTest += Number(field[i]) * mult;
            
            if (modDAC == 10) {
                
            }
        }
    }





};

module.exports = verifyConcessionaire;
