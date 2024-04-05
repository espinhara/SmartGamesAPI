import dotenv from 'dotenv';
dotenv.config();
export default {
  SECRET: 'adcaa9754110110cf9126c31be6b9882',
  COOCKIE_NAME: 'sg-smart-games-token',
  DB: process.env.DB,
  PORT: process.env.PORT || 3005,
}
