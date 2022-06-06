import express from 'express'
import  petRoutes from './routes/petRoutes.js'
import  ownerRoutes from './routes/ownerRoutes.js'
import veterinaryRoutes from './routes/veterinaryRoutes.js'

const api = express()

api.use(express.json())

api.use(petRoutes)
api.use(ownerRoutes)
api.use(veterinaryRoutes)

export default api