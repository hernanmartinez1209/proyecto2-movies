// const {json} = require('express')

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
        }else{
        res.status(200).json(data)
    }
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
const pachtMovies = (req,res) =>{
    const objMovies = req.body
    const idmovies = req.params.id
    moviesControllers.upgradeMovies(objMovies,idmovies)
     .then((data) =>{
        if (!data) {
            res.status(404).json({message:`users with id:${id}, not fount`})
        }
        res.status(200).json(data)
     })
     .catch(err =>console.log(err))
}
const deleteMovies = (req,res) =>{
     const idMovies = req.params.id
     moviesControllers.findMoviesById(idMovies)
     .then((data) =>{
        if (!data) {
            res.status(404).json({message:`users with id:${id}, not fount`})
        }
        res.status(200).json(data)
     })
     .catch(err =>console.log(err))
}
module.exports = {
    getAllMovies,
    getMoviesById,
    postMovies,
    pachtMovies,
    deleteMovies
}