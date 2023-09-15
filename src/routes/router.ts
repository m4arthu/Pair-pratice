import { getClient } from "../controllers/client.controller.ts"
import  express from "express"
const app = express()
app.get("/person",getClient)

export const router = app
