
import express, { Request, Response } from "express";
import path from "node:path";
const port = 3001; // You can choose any port you like
const app = express();


// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, "public")));

// Route to serve index.html
app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


export { app, port };
