const environment = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/meditechDB",
  jwtSecret: process.env.JWT_SECRET || "my_temporary_secret",
};

export default environment;
