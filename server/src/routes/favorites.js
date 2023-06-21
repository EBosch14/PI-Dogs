const {Router} = require('express')

const favoriteSRouter = Router()

favoriteSRouter.get('/', (req,res) => {
  res.status(200).json("This is all favorites")
})

favoriteSRouter.post('/posts', (req, res) => {
  res.status(200).json("Upload successful!")
})

favoriteSRouter.delete('/:favId', (req,res)=> {
  res.status(200).json('Delete successful')
})

module.exports = favoriteSRouter