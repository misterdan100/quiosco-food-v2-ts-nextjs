import { completeOrder } from "@/actions/complete-order-action"
import { OrderWithProducts } from "@/src/types"
import { formatCurrency, formatName } from "@/src/utils"

type OrderCardProps = {
    order: OrderWithProducts
}

export default function OrderCard({ order }: OrderCardProps) {

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
        >
            <p className='text-2xl font-medium text-gray-900'>Client: 
                <span className="font-bold text-black"> {formatName(order.name)}</span>
            </p>
            <p className='text-lg font-medium text-gray-900'>Ordered products:</p>
            <dl className="mt-6 space-y-4">
                {order.orderProducts.map(product => (
                    <div key={product.id}
                        className="flex items-center gap-2 border-5 border-gray-200 pt-4"
                    >
                        <dt className="flex items-center text-sm text-gray-600">
                            <span className="font-black">({product.quantity}) {' '}</span>
                        </dt>
                        <dd className="text-sm font-medium text-gray-900">{product.product.name}</dd>
                    </div>
                ))}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Total to pay: </dt>
                    <dd className="text-base font-medium text-gray-900">{formatCurrency(order.total)}</dd>
                </div>
            </dl>

            <form
                action={completeOrder}
            >
                <input 
                    type="hidden" 
                    value={order.id}
                    name='order_id'
                />
                <input
                    type="submit"
                    className="bg-orange-100 hover:bg-orange-300 rounded-xl text-orange-600 w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    value='Checkout order'
                />
            </form>
        </section>
    )
}