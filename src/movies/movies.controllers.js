
const { Sequelize, where } = require('sequelize')

const moviesDB =[ {
	"id" :1,
	"title": "Pacific Rim",
  "description": "Lorem Ipsum",
  "year": 2012,
  "director": "Guillermo del Toro"
}
]
let idMovies = 2
// esta funcion retorna todos las peliculas
const findAllMovies = async () =>{
    return moviesDB
}
const findMoviesById = async (id) =>{
    // const movies = moviesDB.find(item => item.id === id)
    // return movies
    const movies = moviesDB.find(bookItem => bookItem.id === id)
    return movies
}

const createNewMovies = async (moviesObj) =>{
    const createMovie = {
        "id" : idMovies++,
        "title": moviesObj.title,
      "description": moviesObj.description,
      "year": moviesObj.year,
      "director": moviesObj.director
    }
    moviesDB.push(createMovie)
    return createMovie
}
const upgradeMovies = async (id,objMovies) =>{
   const db = await moviesDB.update(objMovies,{
    where:{
        id:id
    }
   })
   db[0]
}
const deleteMovies =  async (id) =>{
    const moviesId = moviesDB.destroy ({
        where:{
            id:id
        }
    })
}
module.exports = {
    findAllMovies,
    findMoviesById,
    createNewMovies,
    upgradeMovies,
    deleteMovies
}

