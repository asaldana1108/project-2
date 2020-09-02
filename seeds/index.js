const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------User Seeded--------------');

  await seedPosts();
  console.log('--------------Post Seeded--------------');

  await seedComments();
  console.log('--------------Comment Seeded--------------');

  process.exit(0);
};

seedAll();