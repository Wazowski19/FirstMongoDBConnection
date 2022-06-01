import express from 'express'
import * as petController from  '../controllers/PetController.js'

const router = express.Router()

router.post('/pet', petController.createPet)

export default router