import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    nacimiento: Date,
    nombre: String,  
    phone: String,
    correo: String,
    mascotas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet',
        }
    ]
})

export default mongoose.model('Owner', ownerSchema);