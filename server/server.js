import { promises as fs } from "fs";
import express from "express";
import cors from "cors";

console.log("THIS IS THE FILE RUNNING");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
    console.log("TEST ROUTE HIT");
    res.send("test works");
})

app.get("/get_products", async (req, res) => {
    try {
        console.log(2);
        const allProducts = await fs.readFile("./products.json")
        console.log(allProducts);
        res.json(JSON.parse(allProducts))
    } catch (error) {
        res.send(`the problem is in get_products: ${error}`)
    }
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3000, () => {
    console.log("the server is ready on port 3000");
})