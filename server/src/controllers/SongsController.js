const {Song} = require('../models');

module.exports = {
    async index (req, res) {
        try {
            const song = await Song.findAll({
                where: {}
            }); // will return all songs
            res.send(song);
        } catch (error) {
            res.status(500).send({
                error: 'An Error has accured with songs.'
            });
        }
    },
    async songById(req, res) {
        try {
            const song = await Song.find({
                where: req.params
            });
            if (!song) {
                res.send(500).send({
                    error: 'Failed find song.'
                });
            } else {
                res.send(song);
            }
        } catch (error) {
            res.status(500).send({
                error: 'An Error has accured with songs.'
            });
        }
    },
    async save (req, res) {
        try {
            const song = await Song.create(req.body);
            res.send(song);
        } catch (error) {
            res.status(500).send({
                error: 'An Error has accured saving song.'
            });
        }
    },
    async update (req, res) {
        try {
            const result = Song.update(req.body, req.params.id);
            res.send(result);
        } catch (error) {
            res.status(500).send({
                error: 'An Error has accured updating song.'
            });
        }
    }
}