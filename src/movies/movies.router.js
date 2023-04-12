const router = require('express').Router()

const moviesServices = require('./movies.services')

router.route("/movies")
      .get(moviesServices.getAllMovies)
      .post(moviesServices.postMovies);
router.route("/movies/:id")
      .get(moviesServices.getMoviesById)
      .patch(moviesServices.pachtMovies)
      .delete(moviesServices.deleteMovies)      


// router.get('/movies', moviesServices.getAllMovies)
// router.get('/movies/:id', moviesServices.getMoviesById)
// router.post('/movies', moviesServices.postMovies)

 module.exports = router
