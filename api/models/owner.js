import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    nacimiento: Date,
    nombre: {
        type: String,
        required: true,
    },  
    phone: String,
    correo: {
        type: String,
        unique: true,
        required: [true, "El correo es obligatorio"],
        trim: true,
    },
    mascotas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pet',
        }
    ]
})

export default mongoose.model('Owner', ownerSchema);