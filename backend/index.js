import express from "express";
import "dotenv/config";
import userRouter from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors"

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json());
app.use("/", userRouter);
app.use("/", authRoutes);

app.listen(PORT, console.log(`server on http://localhost:${PORT}`));
