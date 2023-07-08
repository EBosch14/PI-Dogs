import axios from "axios";
// const URL_API = "http://localhost:4444"
const URL_API = "https://api-dogs-3if0.onrender.com"

async function uploadDog(data) {
  try {
    const response = await axios.post(`${URL_API}/dogs/upload`, data);
    if (response.status !== 201) {
      throw new Error("Error uploading dog");
    }
    return response.data;
  } catch (error) {
    alert(`Error al crear el perro, intente de nuevo. Error: ${error.message}`)
    console.error(error);
    throw error;
  }
}

async function getDogByID(id) {
  try {
    const response = await axios.get(`${URL_API}/dogs/breeds/${id}`)
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
}

async function searchDogs(search){
  try {
    const response = await axios.get(`${URL_API}/dogs/breeds?search=${search}`)
    return response.data
  } catch (error) {
    throw new Error(`No matches for ${search}`)
  }
}

async function getAllDogs(){
  try {
    const response = await axios.get(`${URL_API}/dogs/breeds`)
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
}

async function getAllTemps(){
  try {
    const response = await axios.get(`${URL_API}/temperaments`)
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
}

export { uploadDog, getDogByID, searchDogs, getAllDogs, getAllTemps };
