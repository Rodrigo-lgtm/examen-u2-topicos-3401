import { Laptop } from "./laptop";

export async function crear(marca: string, modelo: string, precio: number) {
    const nuevaLaptop = await Laptop.create({ marca, modelo, precio });
    return nuevaLaptop;
}

export async function leer() {
    const todasLasLaptops = await Laptop.find({});
    return todasLasLaptops;
}

