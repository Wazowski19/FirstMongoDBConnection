import mongoose from "mongoose";

const veterinarySchema = new mongoose.Schema({
    nacimiento: Date,
    nombre: {
        type: String,
        required: true,
    },  
    phone: String,
    cedula:{
        type: String,
        required: true,
    },
    mascotas_atiende: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet',
        }
    ]
})

export default mongoose.model('Veterinary', veterinarySchema);