const express = require('express');
const songs = require('../controllers/songs.controller');

const router = express.Router();

router.get('/songs', songs.list);

router.get('/songs/new', songs.create);
router.post('/songs', songs.doCreate);

router.get('/songs/:id/edit', songs.edit);
router.post('/songs/:id/edit', songs.doEdit);

router.post('/songs/:id/delete', songs.delete);

module.exports = router;
