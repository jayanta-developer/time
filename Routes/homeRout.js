const express = require('express');
const Router = express.Router();
const HomeController = require('../controller/homeController')


Router.get('/getTimeStories',HomeController.home)


module.exports = Router;