//Connect to cloudinary ie: optimised database to story images videos etc by user
// That is cloud based service

const cloudinary = require("cloudinary")

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret_key: process.env.CLOUDINARY_SECRET_KEY
    }
)

module.exports = cloudinary;