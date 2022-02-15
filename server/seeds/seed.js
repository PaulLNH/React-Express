const sequelize = require("../config/connection");
const { User } = require("../model");

const userSeeds = require("./userSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeeds);

  process.exit(0);
};

seedDatabase();
