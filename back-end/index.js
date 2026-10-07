import express from "express";
import { connectDB } from "./src/config/connectDB.js";
import { envConfig } from "./src/config/envConfig.js";
import { routes } from "./src/routes/index.js";

const server = express();

// server.use(cors());
server.use(express.json());
server.use("/api", routes);
connectDB();

server.listen(envConfig.PORT, "localhost", () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
