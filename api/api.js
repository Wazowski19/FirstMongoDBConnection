import express from 'express'
import  petRoutes from './routes/petRoutes.js'

const api = express()

api.use(express.json())

api.use(petRoutes)

export default api