const { User } = require('../models');

const userdata = [
  {
    username:'user01',
    email:  'user01@email.com',
    password: 'password'
  },
  {
    username: 'user02',
    email: 'user02@email.com',
    password: 'password'
  },
  {
    username: 'user03',
    email: 'user03@email.com',
    password: 'password'
  },
  {
    username: 'user04',
    email: 'user04@email.com',
    password: 'password'
  },
  {
    username: 'user05',
    email: 'user05@email.com',
    password: 'password'
  },
  {
    username:'user06',
    email:  'user06@email.com',
    password: 'password'
  },
  {
    username: 'user07',
    email: 'user07@email.com',
    password: 'password'
  },
  {
    username: 'user08',
    email: 'user08@email.com',
    password: 'password'
  },
  {
    username: 'user09',
    email: 'user09@email.com',
    password: 'password'
  },
  {
    username: 'user10',
    email: 'user10@email.com',
    password: 'password'
  },
  {
    username: 'user11',
    email: 'user11@email.com',
    password: 'password'
  },
  {
    username: 'user12',
    email: 'user12@email.com',
    password: 'password'
  },
  {
    username: 'user13',
    email: 'user13@email.com',
    password: 'password'
  },
  {
    username: 'user14',
    email: 'user14@email.com',
    password: 'password'
  },
  {
    username: 'user15',
    email: 'user15@email.com',
    password: 'password'
  },
  {
    username: 'user16',
    email: 'user16@email.com',
    password: 'password'
  },
  {
    username: 'user17',
    email: 'user17@email.com',
    password: 'password'
  },
  {
    username: 'user18',
    email: 'user18@email.com',
    password: 'password'
  },
  {
    username: 'user19',
    email: 'user19@email.com',
    password: 'password'
  },
  {
    username: 'user20',
    email: 'user20@email.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;