import express from "express"
import { generate, summerize } from "../controllers/aiControllers.js"
export const AIrouter = express.Router()

AIrouter.post("/summerize",summerize)
AIrouter.post("/generate",generate)



