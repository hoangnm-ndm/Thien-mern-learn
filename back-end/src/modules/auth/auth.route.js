import { Router } from "express";

export const authRoutes = Router();

authRoutes.post("/register");
authRoutes.post("/login");
// authRoutes.post("/logout");
// authRoutes.get("/forgot-password");
// authRoutes.post("/change-password");
