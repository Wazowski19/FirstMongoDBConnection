/* 1.- Crear un schema
    2.- Crear un modelo basandonos en el schema*/

import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    edad: Number,
    nombre: String,  
    raza: String,
    tipo: String
})

export default mongoose.model('Pet', petSchema);
