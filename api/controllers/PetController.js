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
        return res.status(500).json({
            msg: 'Ha ocurrido un error al guardar la mascota'
        })
    }
}

export {createPet}