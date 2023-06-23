const {getAllBreedsAPI, getInputBreedAPI} = require("../services/reqBreedsAPI")

const getBreeds = async (search) => {
  if (!search) {
    return await getAllBreedsAPI()
  } else {
    const breeds = await getInputBreedAPI(search)
    if (!breeds.length) throw new Error(`No matches found for '${search}'`)
    return breeds
  }
}

module.exports = {getBreeds}