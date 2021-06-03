const mongoose = require('mongoose');
const Song = require('../models/song.model');

module.exports.list = (req, res, next) => {
    const filters = req.query;

    Song.find(filters)
        .then((songs) => {
            res.render('songs', { songs });
        })
        .catch(next);
};

module.exports.create = (req, res, next) => {
    res.render('form');
};

module.exports.doCreate = (req, res, next) => {
    const song = new Song({
        title: req.body.title,
        year: req.body.year,
        singer: req.body.singer
    });

    song.save()
        .then((song) => {
            res.redirect(`/songs`);
        })
        .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('form', { error: error.errors, song });
            } else {
                next(error);
            }
        });
};

module.exports.edit = (req, res, next) => {
    Song.findById(req.params.id)
        .then((song) => {
            if (song) {
                res.render('edit', { song });
            } else {
                res.redirect('/songs');
            }
        })
        .catch(next);
};

module.exports.doEdit = (req, res, next) => {
    Song.findByIdAndUpdate(req.params.id, req.body)
        .then((song) => {
            res.redirect('/songs');
        })
        .catch(next);
};

module.exports.delete = (req, res, next) => {
    Song.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/songs');
        })
        .catch(next);
};