import axios from "axios";

async function uploadDog(data) {
  try {
    const res = await axios.post("http://localhost:4444/dogs/upload", data);
    if (res.status !== 201) {
      throw new Error("Error uploading dog");
    }
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { uploadDog };
