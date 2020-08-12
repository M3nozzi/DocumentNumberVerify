const Joi = require('joi');

const bankSchema = Joi.object().keys({
    field1i: Joi.string().regex(/^[0-9]{5}$/).required(),
    field1ii: Joi.string().regex(/^[0-9]{5}$/).required(),
    field2i: Joi.string().regex(/^[0-9]{5}$/).required(),
    field2ii: Joi.string().regex(/^[0-9]{6}$/).required(),
    field3i: Joi.string().regex(/^[0-9]{5}$/).required(),
    field3ii: Joi.string().regex(/^[0-9]{6}$/).required(),
    field4: Joi.string().regex(/^[0-9]{1}$/).required(),
    field5: Joi.string().regex(/^[0-9]{14}$/).required()
});

const concessionaireSchema = Joi.object().keys({
    field1: Joi.string().regex(/^[0-9]{11}$/).required(),
    field1dv: Joi.string().regex(/^[0-9]{1}$/).required(),
    field2: Joi.string().regex(/^[0-9]{11}$/).required(),
    field2dv: Joi.string().regex(/^[0-9]{1}$/).required(),
    field3: Joi.string().regex(/^[0-9]{11}$/).required(),
    field3dv: Joi.string().regex(/^[0-9]{1}$/).required(),
    field4: Joi.string().regex(/^[0-9]{11}$/).required(),
    field4dv: Joi.string().regex(/^[0-9]{1}$/).required(),
    date: Joi.string()
  });


const banks = (body) => {
    return new Promise((resolve, reject) => {
        Joi.validate(body, bankSchema)
            // bankSchema.validate(body, bankSchema)
            .then((validBody) => {
                resolve(validBody);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const concessionaires = (body) => {
    return new Promise((resolve, reject) => {
        Joi.validate(body, concessionaireSchema)
    //   concessionaireSchema.validate(body, concessionaireSchema)
      .then((validBody) => {
        resolve(validBody);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };


module.exports = {
    banks: banks,
    concessionaires: concessionaires
};
