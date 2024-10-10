"use client"
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { useEffect, useMemo } from "react"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"
import { toast } from "react-toastify"

export default function OrderSummary() {
  const loadStorage = useStore((state) => state.loadStorage)
  const clearOrder = useStore((state) => state.clearOrder)
  const order = useStore((state) => state.order)

  useEffect(() => loadStorage, [])

  const total = useMemo(() => order.reduce((total, current) => total + (current.subtotal), 0), [order])

  const handleCreateOrder = async  (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      total: total,
      order: order,
    }

    const result = OrderSchema.safeParse(data)
    if(!result.success) {
      result.error.issues.forEach(issue => toast.error(issue.message))
      return
    } 
    const response = await createOrder(data)
    if(response?.errors) {
      response.errors.forEach(issue => toast.error(issue.message))
      return
    } 

    toast.success('Order placed correctly')
    clearOrder()
  }


  return (
    <aside className="lg:h-screen lg:overflow-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-bold ">My Order</h1>

      {order.length === 0 ? <p className="text-center my-10">The cart is empty</p> : (
        <div className="mt-5">
          {order.map(item => (
            <ProductDetails 
              key={item.id}
              item={item}
            />
          ))}

          <p className="text-2xl mt-10 text-center">
            Total to pay: {' '}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>

          <form
            className="w-full mt-5 space-y-5"
            action={handleCreateOrder}
          >
            <input 
              type="text" 
              placeholder="Enter your name"
              className="bg-white border border-gray-100 p-2 w-full"
              name="name"
            />
            <input 
              type="submit" 
              className="py-2 rounded-xl font-bold uppercase text-white bg-black w-full text-center cursor-pointer"
              value={'Confirm Order'}
            />

          </form>
        </div>
      )}
    </aside>
  )
}