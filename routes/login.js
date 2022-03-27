const express = require('express');
const router= express.Router();
const jwt = require('jsonwebtoken');
const jwtManager= require('./../jwtManager');

router.post('/', (req, res) => {
    // Mock user
    const user = {
      id: 1, 
      username: 'raza',
      email: 'razarajwani@live.com'
    }

    const token=jwtManager.generateJwtToken(user);
    res.json({token});
    
  });








module.exports=router;