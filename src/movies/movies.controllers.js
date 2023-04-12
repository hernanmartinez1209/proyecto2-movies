const Movies = require('../models/movies.models')
// const { Sequelize, where } = require('sequelize')

// const moviesDB =[ {
// 	"id" :1,
// 	"title": "Pacific Rim",
// //   "description": "Lorem Ipsum",
// //   "year": 2012,
// //   "director": "Guillermo del Toro"
// // }
// // ]
// let idMovies = 2
// esta funcion retorna todos las peliculas
const findAllMovies = async () =>{
    return  await Movies.findAll()
}
const findMoviesById = async (id) =>{
    // const movies = moviesDB.find(item => item.id === id)
    // return movies
    // const movies = moviesDB.find(bookItem => bookItem.id === id)
    // return movies
    const idMovies =  await Movies.findOne({
        where:id
    })
    return idMovies
}

const createNewMovies = async (moviesObj) =>{
    const createMovie = await Movies.create({
        "id" : moviesObj.id,
        "title": moviesObj.title,
      "description": moviesObj.description,
      "year": moviesObj.year,
      "director": moviesObj.director
    })
   
    return createMovie
}
const upgradeMovies = async (id,objMovies) =>{
//    const db = await Movies.update(objMovies,{
//     where:{
//         id:id
//     }
//    })
//    db[0]
// }
   const selecteMovies = await Movies.findOne({where:id})
   if (!selecteMovies) return null
        const modifyMovies = await Movies.update(objMovies)

   return modifyMovies
 }
const deleteMovies =  async (id) =>{
    const moviesId = await Movies.destroy ({
        where:{
            id:id
        }
    })
    return moviesId
}
module.exports = {
    findAllMovies,
    findMoviesById,
    createNewMovies,
    upgradeMovies,
    deleteMovies
}

