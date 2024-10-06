import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white rounded-2xl hover:shadow-md transition overflow-hidden">
      <div
          className="overflow-hidden"
          >
        <Image
          src={`/products/${product.image}.jpg`}
          alt={`Image ${product.name}`}
          width={400}
          height={500}
          className="hover:rotate-6 transition hover:scale-110"
        />
      </div>
      <div className="p-5 ">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="mt-5 font-bold text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <button
            type="button"
            className="bg-orange-100 hover:bg-orange-400 hover:text-white text-orange-600 w-full mt-3 p-3 uppercase font-bold cursor-pointer transition rounded-xl"
        >
            Add to cart
        </button>
      </div>
    </div>
  );
}
