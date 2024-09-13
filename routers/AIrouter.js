import express from "express"
import { summerize } from "../controllers/AIcontrollers";

export const AIrouter = express.Router();

AIrouter.post("/summerize",summerize)
AIrouter.post("/generate",generate)



