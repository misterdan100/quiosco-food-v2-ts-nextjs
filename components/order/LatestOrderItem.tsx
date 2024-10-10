import { OrderWithProducts } from "@/src/types"
import { formatName } from "@/src/utils"

type LatestOrderItemsProps = {
    order: OrderWithProducts
}

export default function LatestOrderItem({order}: LatestOrderItemsProps) {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-lg">
        <p className="text-lg font-normal text-slate-600">
            Client: <span className="font-semibold text-slate-900">{formatName(order.name)}</span>
        </p>

        <ul
            className="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
            role="list"
        >
            {order.orderProducts.map(product => (
                <li 
                    key={product.id}
                    className="flex py-6 text-lg"
                >
                    <p>
                        <span className="font-bold ">({product.quantity}) {' '}</span>
                        {product.product.name}
                    </p>
                </li>
            ))}

        </ul>

    </div>
  )
}