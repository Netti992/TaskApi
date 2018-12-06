const express = require('express');
const tasks = express();
const models = require('../models');

// INDEX
tasks.get('/', (req, res) => {
  models.Task.findAll().then(tasks => {
    res.json(tasks);
  });
});

// SHOW
tasks.get('/:id', (req, res) => {
  models.Task.findById(req.params.id)
    .then(task => {
      res.json(task);
    });
});

// CREATE
tasks.post('/', (req, res) => {
  models.Task.create({
    name: req.params.name,
    messages: req.params.messages})
    .then(task => {
      res.json(task);
    });
});

// UPDATE
tasks.put('/:id', (req, res) => {
  models.Task.update(req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then(task => {
      res.json(task);
    });
});

// DELETE
tasks.delete('/:id', (req, res) => {
  models.Task.destroy(req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then(task => {
      res.json(task);
    });
});

module.exports = tasks;
