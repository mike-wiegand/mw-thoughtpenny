const express = require('express');
const Entry = require('../models/entry');
const Tag = require('../models/tag');
const Entry_Tag = require('../models/entry_tag');
const router = express.Router();

// Get all entries with related tag
router.route('/').get((req, res) => {
  Entry.query("orderBy", "timestamp", "DESC").fetchAll({ withRelated: ['tags'] })
    .then((entries) => {
      res.status(200).json(entries);
    })
    .catch(() => res.status(400).json({ message: 'Error getting entries' }));
});

// Get single entry by id
router.route('/:id').get((req, res) => {
  console.log(req.params.id)
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
      new Entry({
        title: req.body.title,
        entry: req.body.entry,
      })
        .save()
        .then((entry) => {
        let tagArray = req.body.tags.replace(/#/g,'').trim().split(' ')
        tagArray.forEach(newTag => {
          if (newTag.length > 0) { 
            Tag.where({ tag: newTag })
              .fetch()
              .catch(() => {
                  return new Tag({
                    tag: newTag,
                  }).save()
              })
              .then((tag) => {
                new Entry_Tag({
                  entry_id: entry.id,
                  tag_id: tag.id
                }).save()
              })
          }})
          res.status(201).json(entry)
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
          entry: req.body.entry,
        }, {patch: true})
        .then((updatedEntry) => {
          res.status(200).json(updatedEntry);
        });
    })
    .catch(() => {
      res.status(404).json({ message: 'Error updating entry' });
    });
    console.log(req.body)
    let tagArray = req.body.tags.replace(/#/g,'').trim().split(' ')
    Entry_Tag.where({entry_id: req.params.id}).destroy()
    tagArray.forEach(newTag => {
      if (newTag.length > 0) { 
        Tag.where({ tag: newTag })
          .fetch()
          .catch(() => {
              return new Tag({
                tag: newTag,
              }).save()
          })
          .then((tag) => {
            new Entry_Tag({
              entry_id: req.params.id,
              tag_id: tag.id
            }).save()
          })
      }
    })
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
