const express = require('express')
const router = express.Router()

const UserRoute = require('./Routes/User')

const ExpressRouterAdapter = require('./Routes/ExpressAdapter')

router.get('/', (req, res)=>{console.log('ok');return res.send({message: 'ok'})})
router.post('/user', ExpressRouterAdapter.adapt(UserRoute))

module.exports = router;
