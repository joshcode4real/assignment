const express = require("express");

const portal = 1099;

const postal = express();
const meter = require('../olaexpress/route')
postal.use('/api/v1/Codelab', meter)

postal.use(express.json)

postal.listen(portal, ()=>{
    console.log(`${portal} server is up and running`)
})