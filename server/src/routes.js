const AuthenticationController = require('./controllers/AthenticationController');
const AuthenticationControllerPolicy = require('./polocies/AuthenticationControllerPolicy');

module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({
            message: 'SongBook App By MagusM'
        });
    });
    
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    );

    app.post('/login', AuthenticationController.login);
};
