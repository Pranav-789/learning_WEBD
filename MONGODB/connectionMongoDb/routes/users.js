const express = require('express');
const router = express.Router();

const User = require('../models/user.model')

//routes

//CRUD operations

//View/Read

router.get('/users', async(req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

//create

router.post('/users', async(req, res)=>{
    try {
      const {name, age, weight} = req.body;
      const newUser = new User({name, age, weight});
      await newUser.save();
      res.status(200).json({
        success: true,
        user: newUser
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
})

//update
router.put('/users/:id', async(req, res)=>{
  const {id} = req.params;
  const {name, age, weight} = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, {name, age, weight});
    if(!updatedUser){
      res.json({
        message: "User Not Found!",
      })

      res.status(200).json({
        success: true,
        user: updatedUser
      })
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

router.delete('/users/:id', async(req, res)=>{
  const {id} = req.params;

  try{
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser){
      res.json({
        message: "User Not Found!",
      })

      res.status(200).json({
        success: true,
        user: deletedUser
      })
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

module.exports = router;