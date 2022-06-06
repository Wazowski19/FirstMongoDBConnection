import express from 'express'
import * as veterinaryController from  '../controllers/veterinaryController.js'

const router = express.Router()

router.post('/veterinaries', veterinaryController.createVeterinary)
router.get('/veterinaries', veterinaryController.getVeterinary)
router.get('/veterinaries/:id', veterinaryController.getVeterinaryByIdWithPets)

export default router