import { clientRepository } from "../repositories/repositories.ts";

export async function getClientService(){
   const count  = await  clientRepository.countClients()
   const id  = Math.floor(Math.random()*(count)) + 1
   return await clientRepository.getClients(id)
}