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
            msg: 'Owner creado satisfactoriamente',
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

const getOwner = async (req, res) =>{

    try {
        const owners = await Owner.find();
        return res.json({
            msg: 'Usuarios encontrados',
            data: owners
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Ha ocurrido un error al consultar los dueños'
        })
    }
}

const getOwnerByIdWithPets = async (req, res) =>{
    const {id} = req.params;

    try {
        const owner = await Owner.findById(id).populate('mascotas');
        if(!owner){
            return res.status(404).json({
                msg: `Dueño no encontrado con id ${id}`
            });
        }

        return res.json({
            msg: 'Dueño encontrado',
            data: owner
        })
    } catch (error) {
        
    }
}

export {createOwner, getOwner, getOwnerByIdWithPets}