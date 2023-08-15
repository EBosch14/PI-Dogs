const { createDogsDB } = require("../services/createDogsDB");
const { uploadImage } = require("../uploads/cloudinary");
const { validateInfo } = require("../utils/validateInfoDog");

const postDog = async (info) => {
  try {
    // console.log(info);
    const isValid = await validateInfo(info);
    if (isValid) {
      const imagePath = info.image.tempFilePath
      const uploadedImage = await uploadImage(imagePath)
      // console.log(uploadedImage);
      const dog = await createDogsDB({...info, image: uploadedImage.secure_url});
      return dog;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { postDog };
