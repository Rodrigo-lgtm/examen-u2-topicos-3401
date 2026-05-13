import mongoose = require("mongoose") ;

const LaptopSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: Number, required: true }
});

export const Laptop = mongoose.model("Laptop", LaptopSchema);