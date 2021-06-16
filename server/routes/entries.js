const express = require('express');
const Entry = require('../models/entry');
const Tag = require('../models/tag');
const router = express.Router();

// Get all entries with related tag
router.route('/').get((req, res) => {
  Entry.fetchAll({ withRelated: ['tags'] })
    .then((entries) => {
      res.status(200).json(entries);
    })
    .catch(() => res.status(400).json({ message: 'Error getting entries' }));
});

// Get single entry by id
router.route('/:id').get((req, res) => {
  Entry.where({ id: req.params.id })
    .fetch({ withRelated: ['tags'] })
    .then((entry) => {
      console.log(entry.attributes);
      res.status(200).json({ entry });
    })
    .catch(() => {
      res.status(404).json({ message: `Error getting entry ${req.params.id}` });
    });
});

// Create new entry
router.route('/').post((req, res) => {
  Tag.where({ id: req.body.tag_id })
    .fetch()
    .then(
      (tag) => {
        return tag; // -> pass tag object to next .then() method
      },
      () => {
        res.status(404).json({ message: 'Not a valid tag id' });
      }
    )
    .then((tag) => {
      new Entry({
        title: req.body.title,
        content: req.body.content,
        tag_id: tag.id,
      })
        .save()
        .then((newEntry) => {
          res.status(201).json(newEntry);
        });
    })
    .catch(() => res.status(404).json({ message: 'Error creating entry' }));
});

// Update entry
router.route('/:id').put((req, res) => {
  Entry.where({ id: req.params.id })
    .fetch()
    .then((entry) => {
      entry
        .save({
          title: req.body.title,
          content: req.body.content,
          tag_id: entry.tag_id,
        })
        .then((updatedEntry) => {
          res.status(200).json(updatedEntry);
        });
    })
    .catch(() => {
      res.status(404).json({ message: 'Error updating entry' });
    });
});

// Delete entry
router.route('/:id').delete((req, res) => {
  Entry.where({ id: req.params.id })
    .destroy()
    .then(() => {
      res.status(200).json({ message: `Entry ${req.params.id} deleted` });
    })
    .catch(() =>
      res.status(400).json({ message: `Error deleting entry ${req.params.id}` })
    );
});

module.exports = router;
