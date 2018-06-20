module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({
            message: 'SongBook App By MagusM'
        });
    });
    
    app.post('/register', (req, res) => {
        res.send({
            message: `Hello ${req.body.email}, Your user was registered, Have fun!`
        });
    });
};
