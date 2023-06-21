const {Router} = require("express")

const uploadRouter = Router()

uploadRouter.post('/', (req, res) => {
  res.status(200).json("Upload successful")
})

module.exports = uploadRouter