import axios from "axios";

const { VITE_URL_API, VITE_URL_API_LOCAL } = import.meta.env;

async function uploadDog(data) {
  const formData = new FormData();
  formData.append("image", data.image);
  formData.append("name", data.name);
  formData.append("weight", data.weight);
  formData.append("height", data.height);
  formData.append("lifeSpan", data.lifeSpan);
  formData.append("temperaments", data.temperaments);

  try {
    const response = await axios.post(`${VITE_URL_API}/dogs/upload`, formData);

    if (response.status !== 201) {
      throw new Error("Error uploading dog");
    }
    return response.data;
  } catch (error) {
    alert(`Error al crear el perro, intente de nuevo. Error: ${error.message}`);
    console.error(error);
    throw error;
  }
}

async function getDogByID(id) {
  try {
    const response = await axios.get(`${VITE_URL_API}/dogs/breeds/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function searchDogs(search) {
  try {
    const response = await axios.get(
      `${VITE_URL_API}/dogs/breeds?search=${search}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`No matches for ${search}`);
  }
}

async function getAllDogs() {
  try {
    const response = await axios.get(`${VITE_URL_API}/dogs/breeds`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllTemps() {
  try {
    const response = await axios.get(`${VITE_URL_API}/temperaments`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { uploadDog, getDogByID, searchDogs, getAllDogs, getAllTemps };
