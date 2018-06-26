const {User} = require('../models');

module.exports = {
    async hello (req, res) {

    },
    async register (req, res) {
        try {
            const user = await User.create(req.body);
            res.send(user.toJson());
        } catch (err) {
            res.status(400).send(
                {
                    error: 'This email account is already in use'
                }
            );
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({
            where: {
                email: email
            }});
            if (!user || password !== user.password) {
                res.status(403).send({
                    error: 'The logging information was incorrect'
                });
            }

            res.send({
                user: user.toJson()
            });
        } catch (error) {
            res.status(500).send({
                error: 'Login failed'
            });
        }
    }
}
