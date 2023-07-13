const cloudinary = require("cloudinary").v2;
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SEC } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SEC,
  secure: true,
});

async function uploadImage(imagePath) {
  try {
    return await cloudinary.uploader.upload(imagePath, {
      folder: "dogs",
    });
  } catch (error) {
    return new Error("Could not upload image.")
  }
}

module.exports = { uploadImage };
