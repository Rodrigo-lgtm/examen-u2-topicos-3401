import {Request, Response, Router} from "express";
import { crear, leer } from "./laptop.controller";

const laptopRoutes = Router();

laptopRoutes.get("/", async (req: Request, res: Response) => {
    const resultado = await leer();
    res.json(resultado);
});

laptopRoutes.post("/", async (req: Request, res: Response) => {
    const { marca, modelo, precio } = req.body;
    const respuesta = await crear(marca, modelo, precio);
    res.json(respuesta);
});

export default laptopRoutes;