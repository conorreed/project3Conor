const db = require('./connection');
const { User, Character } = require('../models');
const cleanDB = require('./cleanDB');




db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Character', 'characters');

    // const characters = await Character.insertMany([
    //   {
    //     name: 'ghost',
    //     image: 'this is an image, trust me',
    //     health: 20,
    //     attack: 5,
    //   },
    //   {
    //     name: 'frog',
    //     image: 'this is an image, trust me',
    //     health: 25,
    //     attack: 3,
    //   }
    // ])

    const characterOne = await Character.create({
      name: 'ghost',
        image: 'this is an image, trust me',
        health: 20,
        attack: 5,
    })
    const characterTow = await Character.create({
        name: 'frog',
        image: 'this is an image, trust me',
        health: 25,
        attack: 3,
    })

    await User.create({
        username: 'hank',
        email: 'bbq@testmail.com',
        password: 'password123',
        characters: [characterOne._id],

      });
    
      await User.create({
        username: 'bobby',
        email: 'thtsmypurse@testmail.com',
        password: 'password123',
        characters: [characterTow._id],

      });

      // for (let i = 0; i < characters.length; i++) {
      //   const { _id, ID } = await Character.create(characters[i]);
      // const user = await User.findOneAndUpdate(
      //   { username: 'bobby' },
      //   {
      //     $addToSet: {
      //       characters: _id,
      //     },
      //   }
      // );
      // }

    
      
      console.log('characters seeded');
      console.log('users seeded');
    
      process.exit();
});
