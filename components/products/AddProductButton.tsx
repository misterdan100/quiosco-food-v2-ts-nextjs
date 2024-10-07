"use client"

import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product}: AddProductButtonProps) {
    const addToCart = useStore((state) => state.addToCart)
  return (
    <button
      type="button"
      className="bg-orange-100 hover:bg-orange-400 hover:text-white text-orange-600 w-full mt-3 p-3 uppercase font-bold cursor-pointer transition rounded-xl"
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  );
}
