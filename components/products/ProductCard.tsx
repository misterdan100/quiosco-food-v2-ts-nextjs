import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {

  const imagePath = getImagePath(product.image)

  return (
    <div className="border bg-white rounded-2xl hover:shadow-md transition overflow-hidden">
      <div
          className="overflow-hidden"
          >
        <Image
          src={`${imagePath}`}
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
        <AddProductButton product={product}/>
      </div>
    </div>
  );
}
