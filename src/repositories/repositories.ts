import {db} from "../databaseconnection/database.connection.ts"
import { Client, ClientCount } from "../protocols/protocols.ts"

async function countClients(){
    return (await db.query<ClientCount>(`select count(id) as "countPeople" from people`)).rows[0].countPeople
}

async function getClients(id:number){
    return (await db.query<Client>(`select * from people where id = $1`,[id])).rows[0]
}

export const  clientRepository = {
    countClients,
    getClients

}