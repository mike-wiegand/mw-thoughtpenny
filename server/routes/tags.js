const express = require('express');
const Tag = require('../models/tag');
const router = express.Router();

// Get all tags with related entries
router.route('/').get((req, res) => {
  Tag.fetchAll({ withRelated: ['entries'] })
    .then((tags) => {
      res.status(200).json(tags);
    })
    .catch(() => res.status(400).json({ message: 'Error getting tags' }));
});

// Get single tag by id with related entries
router.route('/:id').get((req, res) => {
  Tag.where({ id: req.params.id })
    .fetch({ withRelated: ['entries'] })
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch(() =>
      res.status(400).json({ message: `Error getting tag ${req.params.id}` })
    );
});

// Create a new tag
router.route('/').post((req, res) => {
  new Tag({
    name: req.body.name,
  })
    .save()
    .then((newTag) => {
      res.status(201).json(newTag);
    })
    .catch(() =>
      res.status(400).json({ message: `Error creating tag ${req.body.name}` })
    );
});

// update a tag
router.route('/:id').put((req, res) => {
  Tag.where({ id: req.params.id })
    .fetch()
    .then((tag) => {
      tag
        .save({
          name: req.body.name,
        })
        .then((updatedTag) => {
          res.status(200).json(updatedTag);
        });
    })
    .catch(() =>
      res.status(400).json({ message: `Error updating tag ${req.params.id}` })
    );
});

// Delete a tag
router.route('/:id').delete((req, res) => {
  Tag.where({ id: req.params.id })
    .destroy()
    .then(() => {
      res.status(200).json({ message: `Tag ${req.params.id} deleted` });
    })
    .catch(() =>
      res.status(400).json({ message: `Error deleting tag ${req.params.id}` })
    );
});

module.exports = router;
