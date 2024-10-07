"use client"
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { formatCurrency } from "@/src/utils"
import { useEffect, useMemo } from "react"

export default function OrderSummary() {
  const loadStorage = useStore((state) => state.loadStorage)
  const order = useStore((state) => state.order)

  useEffect(() => loadStorage(), [])

  const total = useMemo(() => order.reduce((total, current) => total + (current.subtotal), 0), [order])
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
        </div>
      )}
    </aside>
  )
}