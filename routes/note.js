const express = require('express'),
router = express.Router(),
noteController = require('./../controllers/note');

router.route('/')
.get(noteController.getAllNotes)
.post(noteController.postNote)

router.route('/:noteId')
.get(noteController.getNoteById)
.put(noteController.updateNote)
.delete(noteController.deleteNote)

module.exports = router; 