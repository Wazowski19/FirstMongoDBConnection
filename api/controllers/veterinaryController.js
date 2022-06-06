import Veterinary from '../models/veterinary.js'


const createVeterinary = async(req, res) =>{
    const {veterinary} = req.body

    if(!veterinary){
        return res.status(400).json({
            msg: "Falta informacion en el body, missing veterinary"
        })
    }

    try {
        const newVeterinary = await Veterinary.create(veterinary)
        return res.json({
            msg: 'Veterinario creado satisfactoriamente',
            veterinary: newVeterinary
        })
        
    } catch (error) {
        const result = {
            msg: 'Ha ocurrido un error al guardar el veterinario',
            error: process.env.NODE_ENV == 'local' || process.env.NODE_ENV == 'development' ? error : null
        }
        return res.status(500).json(result)
    }
}

const getVeterinary = async (req, res) =>{

    try {
        const veterinaries = await Veterinary.find();
        return res.json({
            msg: 'Veterinarios encontrados',
            data: veterinaries
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Ha ocurrido un error al consultar los veterinarios'
        })
    }
}

const getVeterinaryByIdWithPets = async (req, res) =>{
    const {id} = req.params;

    try {
        const veterinary = await Veterinary.findById(id).populate('mascotas_atiende');
        if(!veterinary){
            return res.status(404).json({
                msg: `Veterinario no encontrado con id ${id}`
            });
        }

        return res.json({
            msg: 'Veterinario encontrado',
            data: veterinary
        })
    } catch (error) {
        
    }
}


export {createVeterinary, getVeterinary, getVeterinaryByIdWithPets}