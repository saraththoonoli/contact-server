// import json server
const jsonserver = require('json-server')

// create json server

const server = jsonserver.create()

// set up route for db.json
const router=jsonserver.router("db.json")

// middleware

const middleware = jsonserver.defaults()

// setup port for server app

const port = process.env.PORT || 3000

// use router middle ware in server app
server.use(middleware)
server.use(router)


// to listen the server app in port
server.listen(port,()=>{
    console.log(`contact server app started at port${port}`);
})