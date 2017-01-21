  'use strict'
  let UsersController = require('../controllers/UsersController')
  module.exports = (app) => {
      let ctrl = new UsersController()

      app.get('/users', (req, res, next) => {
          return ctrl.find(req, res, next)
              // Récupération de tous les users

      })

      app.get('/users/:id', (req, res, next) => {
          // Récupération d'un user en fonction de l'id passé en paramètre
          return ctrl.findById(req, res, next)
      })

      app.post('/users', (req, res, next) => {

          // Création d'un User depuis les données contenu dans le corps de la requete (request body)
          return ctrl.create(req, res, next)

      })
      app.post('/upload', (req, res, next) => {
          return ctrl.upload(req, res, next)
      })

      app.put('/users/:id', (req, res, next) => {
          // Mise à jour du User d'id passé en paramètre depuis les données contenu dans le corps de la requete (request body)
          return ctrl.update(req, res, next)
      })

      app.delete('/users/:id', (req, res, next) => {
          // Suppression du User d'id passé en paramètre
          return ctrl.delete(req, res, next)

      })
  }
