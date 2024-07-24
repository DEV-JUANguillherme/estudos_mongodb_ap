import { FastifyRequest, FastifyReply } from "fastify";
import {CreatedCustomerServices} from '../services/CreateCustomerServices'


class CreateCustomerControllers {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {name, email} = request.body as {name: string, email: string}
    
        const customerService = new CreatedCustomerServices()
        const customer = await customerService.execute({name, email})

        reply.send(customer)
    }
}

export {CreateCustomerControllers}