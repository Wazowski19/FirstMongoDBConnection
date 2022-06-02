import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    nacimiento: Date,
    nombre: String,  
    phone: String,
    correo: String
})

export default mongoose.model('Owner', ownerSchema);