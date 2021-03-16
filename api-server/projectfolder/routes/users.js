const express = require('express')
const router = express.Router()

const User = require('../../models/user')
const userRoutes = (app, fs) => {
    // variables
    const dataPath = '/Users/admin/Desktop/Practice_Test/my-test/api-server/projectfolder/data/users.json';
  
    // READ
    app.get('/users', async(req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch(err){
            res.status(500).json({ message: err.message })
        }
    //   fs.readFile(dataPath, 'utf8', (err, data) => {
    //     if (err) {
    //       throw err;
    //     }
  
    //     res.send(JSON.parse(data));
    //   });
    });

    app.post('/users', async (req, res) => {
        const user = new User({
            body: req.body.body,
            title: req.body.title
        })
      
        try {
          const newUser = await user.save()
          res.status(201).json(newUser)
        } catch (err) {
          res.status(400).json({ message: err.message })
        }
    })
  };
  
module.exports = userRoutes;