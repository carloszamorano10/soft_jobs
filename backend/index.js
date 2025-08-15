import express from "express";
import "dotenv/config";
import userRouter from "./routes/users.routes.js"

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use("/api", userRouter)

app.listen(PORT, console.log(`server on http://localhost:${PORT}`));