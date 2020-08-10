const Joi = require('@hapi/joi');

const bankSchema = Joi.object().keys({
    field1i: Joi.string().regex(/^[0-9]{5$/).required(),
    field1ii: Joi.string().regex(/^[0-9]{5$/).required(),
    field2i: Joi.string().regex(/^[0-9]{5}$/).required(),
    field2ii: Joi.string().regex(/^[0-9]{6}$/).required(),
    field3i: Joi.string().regex(/^[0-9]{5}$/).required(),
    field3ii: Joi.string().regex(/^[0-9]{6}$/).required(),
    field4: Joi.string().regex(/^[0-9]{1}$/).required(),
    field5: Joi.string().regex(/^[0-9]{14}$/).required()
    
});

const banks = (body) => {
    return new Promise((resolve, reject) => {
        bankSchema.validate(body, bankSchema)
            .then((validBody) => {
                resolve(validBody);
            })
            .catch((error) => {
                reject(error);
            })
    });
};

module.exports = {
    banks: banks,
}
