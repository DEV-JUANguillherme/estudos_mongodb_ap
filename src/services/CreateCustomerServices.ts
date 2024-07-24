
import prismaClient from "../prisma/pris";

interface CreatedCustomerProps {
    name:string
    email:string
}
class CreatedCustomerServices{
    async execute({name, email}: CreatedCustomerProps){
        
        if(!name || !email){
            throw new Error("preencha todos os campos")
        }

        const customerDB = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })
        return customerDB
    }

}

export {CreatedCustomerServices}