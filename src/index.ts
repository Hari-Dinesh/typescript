import "reflect-metadata"
import express from "express"
const app=express()
app.use(express.json())
import { DataSource } from "typeorm"
import { Movie } from "./entities/movies"
import { bookings } from "./entities/booking"
import movieroutes from '../src/routes/movieroutes'
import bookingroutes from '../src/routes/bookingroutes'
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "movies",
    entities: [Movie,bookings],
    synchronize: false,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        console.log("connected to database")
        app.use('/movies',movieroutes)
        app.use('/booking',bookingroutes)
        app.listen(5050,()=>{
            console.log("5050")
        })
    })
    .catch((error) => console.log(error))