import z from 'zod'

export const OrderSchema = z.object({
    name: z.string().min(3, 'Name not valid, min 3 characters'),
    total: z.number().min(1, 'There are errors in the order'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number(),
    }))
})