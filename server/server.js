import { promises as fs } from "fs";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/get_products", async (req, res) => {
    try {
        const allProducts = await fs.readFile("./products.json")
        res.json(JSON.parse(allProducts))
    } catch (error) {
        res.send(`the problem is in get_products: ${error}`)
    }
})

app.listen(3000, () => {
    console.log("the server is ready on port 3000");
})