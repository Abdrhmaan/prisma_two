
import express  from "express";

import author from "./Author.js"

import rating from "./Rating.js"
import restrunt from "./Restrunt.js"


const server = express()
server.use(express.json())


server.use("/api/xaan" , author)
server.use("/api/jirde" ,rating)
server.use("/api/rest" ,restrunt)

export default server