import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import laptopRoutes from "./laptop.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/laptops", laptopRoutes);

mongoose.connect("mongodb://localhost:27017/")
    .then(() => {
        app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
    })
    .catch((error) => console.log(Error + "error"));