import Owner from '../models/owner.js'


const createOwner = async(req, res) =>{
    const {owner} = req.body

    if(!owner){
        return res.status(400).json({
            msg: "Falta informacion en ell body, missing owner"
        })
    }

    try {
        const newOwner = await Owner.create(owner)
        return res.json({
            msg: 'Mascota creada satisfactoreiamente',
            owner: newOwner
        })
        
    } catch (error) {
        const result = {
            msg: 'Ha ocurrido un error al guardar el dueño',
            error: process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'development' ? error : null
        }
        return res.status(500).json(result)
    }
}

export {createOwner}