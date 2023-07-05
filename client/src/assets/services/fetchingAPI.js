import axios from "axios";

async function uploadDog(data) {
  try {
    const response = await axios.post("http://localhost:4444/dogs/upload", data);
    if (response.status !== 201) {
      throw new Error("Error uploading dog");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getDogByID(id) {
  try {
    const response = await axios.get(`http://localhost:4444/dogs/breeds/${id}`)
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
}

export { uploadDog, getDogByID };
