import { ProductsWithCategory } from "@/app/admin/products/page";
import { Category, Product } from "@prisma/client"
import Link from "next/link";

type ProductTableProps = {
    // products: (Product & {category: Category})[]
    products: ProductsWithCategory
}

export default function ProductTable({products}: ProductTableProps) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0 text-center"
                    >
                      <span 
                        className="px-3 py-3.5 text-sm font-semibold text-gray-900 text-center"
                      >Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-100 transition">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{product.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{product.price}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">{product.category.name}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0 text-center">
                        <Link 
                            href={`/admin/products/${product.id}/edit`}
                            className="text-orange-600 hover:text-orange-800"
                        >Edit <span className="sr-only">, {product.name}</span></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}