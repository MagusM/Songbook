const {User} = require('../models');

module.exports = {
    async register(req, res) {
        try {
            let user = await User.create(req.body);
            // res.send(user.toJson());
            res.send('user created');
        } catch (err) {
            res.status(400).send(
                {
                    error: 'This email account is already in use'
                }
            );
        }
    }
}
