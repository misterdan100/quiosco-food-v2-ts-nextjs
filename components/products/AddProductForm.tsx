"use client"

import { createProduct } from "@/actions/create-product-action"
import { ProductSchema } from "@/src/schema"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function AddProductForm({children}: {children: React.ReactNode}) {
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image')
        }

        const result = ProductSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }
        const response = await createProduct(result.data)
        if(response?.errors) {
            response.errors.forEach(error => toast.error(error.message))
            return
        }

        toast.success('Product created')
        router.push('/admin/products')
        
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-xl shadow-md max-w-3xl mx-auto">
        <form 
            action={handleSubmit}
            className="space-y-5"
        >
            {children}

            <input 
                type="submit" 
                className="bg-orange-100 hover:bg-orange-300 text-orange-600 w-full mt-3 p-3 uppercase font-bold cursor-pointer rounded-xl text-center transition-colors"
                value='Create Product'
            />

        </form>
      
    </div>
  )
}