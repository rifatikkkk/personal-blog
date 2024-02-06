import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import videoRoutes from './routes/videoRoutes.js'
import commentRoutes from './routes/commentRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const PORT = process.env.PORT || 3002
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_CLUSTER = process.env.DB_CLUSTER
const DB_CODE = process.env.DB_CODE
const DB_NAME = process.env.DB_NAME


// http://localhost:3002/users
app.use('/api/users', userRoutes)

// http://localhost:3002/auth
app.use('/api/auth', authRoutes)

// http://localhost:3002/videos
app.use('/api/videos', videoRoutes)

// http://localhost:3002/comments
app.use('/api/comments', commentRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Something went wrong'
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})


async function start() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.${DB_CODE}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        console.log('Server connected with DataBase');
        app.listen(PORT, (req, res) => {
            // var url = req.headers.host + '/' + req.url;
            console.log("Server started on " + PORT);
        })
    } catch (error) {
        console.log(error)
    }
}

start()