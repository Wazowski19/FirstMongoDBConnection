import express from 'express'
import * as ownerController from  '../controllers/ownerController.js'

const router = express.Router()

router.post('/owner', ownerController.createOwner)

export default router