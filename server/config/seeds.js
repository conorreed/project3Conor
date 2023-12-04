const db = require('./connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('User', 'users');

    await User.create({
        username: 'hank',
        email: 'bbq@testmail.com',
        password: 'password123',

      });
    
      await User.create({
        username: 'bobby',
        email: 'thtsmypurse@testmail.com',
        password: 'password123',

      });
    
      console.log('users seeded');
    
      process.exit();
})