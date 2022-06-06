import express from 'express'
import * as ownerController from  '../controllers/ownerController.js'

const router = express.Router()

router.post('/owners', ownerController.createOwner)
router.get('/owners', ownerController.getOwner)
router.get('/owners/:id', ownerController.getOwnerByIdWithPets)

export default router