import { getClientService } from "../services/clients.services.ts";
import { Request,Response } from "express";
export async function getClient(req:Request,res:Response){
  const client = await getClientService()
  res.send(client)
}