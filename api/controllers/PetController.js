import Pet from '../models/pet.js'


const createPet = async(req, res) =>{
    const {pet} = req.body

    if(!pet){
        return res.status(400).json({
            msg: "Falta informacion en ell body, missing pet"
        })
    }

    try {
        const newPet = await Pet.create(pet)
        return res.json({
            msg: 'Mascota creada satisfactoreiamente',
            pet: newPet
        })
        
    } catch (error) {
        const result = {
            msg: 'Ha ocurrido un error al guardar la mascota',
            error: process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'development' ? error : null
        }
        return res.status(500).json(result)
    }
}

export {createPet}