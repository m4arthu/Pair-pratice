import express, {Request,Response,NextFunction,ErrorRequestHandler} from "express"
import  "express-async-errors" 
import { router } from "./routes/router.ts" 

const app = express()
app.use((err:ErrorRequestHandler,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).send("Deu  pau  no  server verificar logs!!!")
})

app.use(router)

app.listen(5000,()=>{
    console.log(`------servidor rodando na  porta 5000`)
})