import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderItem[]
    addToCart: (product: Product) => void
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    deleteItem: (id: Product['id']) => void
    loadStorage: () => void
    clearOrder: () => void
}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToCart: (product) => {

        const { ...data } = product

        let items: OrderItem[] = []

        if(get().order.find( item => item.id === data.id)) {
            items = get().order.map(item => {
                if(item.id === data.id) {
                    if(item.quantity < 5) {
                        item.quantity = item.quantity + 1
                        item.subtotal = item.quantity * item.price
                        return item
                    }
                } 
                return item
            })

        } else {
            items = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }

        set(() => ({
            order: items
        }))

        localStorage.setItem('quiosco_order', JSON.stringify(get().order))
    },
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map( item => {
                if(item.id === id) {
                    if(item.quantity === 5) {
                        return item
                    } else {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                            subtotal: item.price * (item.quantity + 1)
                        }
                    }
                } else {
                    return item
                }
            })
        }))
        localStorage.setItem('quiosco_order', JSON.stringify(get().order))
    },
    decreaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map( item => {
                if(item.id === id) {
                    if(item.quantity === 1) {
                        return item
                    } else {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                            subtotal: item.price * (item.quantity - 1)
                        }
                    }
                } else {
                    return item
                }
            })
        }))
        localStorage.setItem('quiosco_order', JSON.stringify(get().order))
    },
    deleteItem: (id) => {
        set((state) => ({
            order: state.order.filter( item => item.id !== id)
        }))
        localStorage.setItem('quiosco_order', JSON.stringify(get().order))
    },
    loadStorage: () => {
        const orderFromStorage = localStorage.getItem('quiosco_order')
        if(orderFromStorage) {
            set(() => ({
                order: JSON.parse(orderFromStorage)
            }))
        }
    },
    clearOrder: () => {
        set(() => ({
            order: []
        }))
        localStorage.removeItem('quiosco_order')
    }
}))