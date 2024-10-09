"use client"
import { SearchSchema } from "@/src/schema"
import { redirect } from "next/navigation"
import { toast } from "react-toastify"

export default function ProductSearchForm() {

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach( issue => {
                toast.error(issue.message)
            })
            return
        }
        redirect(`/admin/products/search?search=${result.data.search}`)
    }
  return (
    <form 
        className="flex items-center gap-2 "
        action={handleSearchForm}
    >
        <input 
            type="text"
            placeholder="Search product"
            className="p-2 placeholder-gray-400 w-full rounded-xl"
            name="search"
        />

        <input type="submit" 
            value={'Search'}
            className="bg-orange-100 text-orange-600 w-full lg:w-auto text-xl rounded-xl px-2 py-2 text-center font-semibold cursor-pointer hover:bg-orange-200 transition"
        />

    </form>
  )
}