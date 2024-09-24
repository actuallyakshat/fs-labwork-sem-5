module.exports = {
  MONGO_IP: process.env.MONGODB_IP || "mongo",
  MONGO_PORT: process.env.MONGODB_PORT || "27017",
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
};
