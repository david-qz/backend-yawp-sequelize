const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Genre.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await db.Genre.findByPk(req.params.id, {
        include: db.Movie
      });
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
