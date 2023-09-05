require("dotenv").config();

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  NODE_ENV,
  SV_PORT,
  DB_URL,
  API_URL,
  CLOUD_NAME,
  CLOUD_API_KEY,
  CLOUD_API_SEC,
} = process.env;

module.exports = {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  NODE_ENV,
  SV_PORT,
  DB_URL,
  API_URL,
  CLOUD_NAME,
  CLOUD_API_KEY,
  CLOUD_API_SEC,
};
