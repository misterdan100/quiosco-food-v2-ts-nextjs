import { prisma } from "@/src/lib/prisma"
import ImageUpload from "./ImageUpload"

async function getCategories() {
    const categories = await prisma.category.findMany()
    return categories
}

export default async function ProductForm() {
    const categories = await getCategories()

    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Product name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-50 outline-none border-2 focus:border-orange-400 rounded-xl"
                    placeholder="Product name"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="price"
                >Price:</label>
                <input
                    id="price"
                    name="price"
                    className="block w-full p-3 bg-slate-50 outline-none border-2 focus:border-orange-400 rounded-xl"
                    placeholder="Product price"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="categoryId"
                >Category:</label>
                <select
                    className="block w-full p-3 bg-slate-50 outline-none border-2 focus:border-orange-400 rounded-xl"
                    id="categoryId"
                    name="categoryId"
                >
                    <option value="">-- Select --</option>
                    {categories.map(cat => (
                        <option
                            key={cat.id}
                            value={cat.id}
                        >{cat.name}</option>
                    ))}
          
                </select>
            </div>

            <ImageUpload />
        </>
    )
}