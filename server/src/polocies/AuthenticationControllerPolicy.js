const joi = require('joi');

module.exports = {
    register (req, res, next) {
        const schema = {
            email: joi.string().email(),
            password: joi.string().regex(new RegExp('^[a-zA-Z0-9]{8/32}$'))
        };
        const {error, value} = joi.validate(req.body, schema);
        if (!error) {
            next();
        }
        
        switch (error.details[0].context.key) {
            case 'email':
                msg = {
                    error: 'You must provide a valid email address'
                };
                break;
            case 'password':
                msg = {
                    error: `The password provided failed to match the following rules:
                    <br>
                    <ol>
                        <li>It must contain ONLY following charcters: lower/upper case, numerics</li>
                        <li>It must be greater then 8 and smaller then 32 character in length</li>
                    </ol>
                    `
                };
                break;
            default:
                msg = {
                    error: 'Invalid registration information'
                };
        }
        res.status(400).send(msg);
    }
};
