const {json} = require('express')

const moviesControllers = require('./movies.controllers')

const getAllMovies = (req,res) =>{
    moviesControllers.findAllMovies()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(400).json({message:err})
    })
}

const getMoviesById = (req,res) =>{
    const id = Number(req.params.id)
    moviesControllers.findMoviesById(id)
    .then((data)=>{
        if(!data){
          res.status(404).json({message:"movies Undefined"})
        }
        res.status(200).json(data)
    })
    .catch((err) =>{
        res.status(400).json({message:err})
    })
}
const postMovies = (req,res) =>{
    const objMovies = req.body
    moviesControllers.createNewMovies(objMovies)
    .then((data) =>{
        res.status(201).json(data)

    })
    .catch((err) =>{
        res.status(400).json({message:err})
    })
}
module.exports = {
    getAllMovies,
    getMoviesById,
    postMovies
}