"use client"

import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({category}: CategoryIconProps) {
    const params = useParams<{category: string}>()
  return (
    <div className={` ${params.category === category.slug && 'bg-orange-400'} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
            <Link 
                href={`/order/${category.slug}`} 
                className="text-xl font-bold flex gap-4 items-center"
            >
                <div className="w-16 h-16 relative hover:scale-110 transition">
                    <Image fill src={`/icon_${category.slug}.svg`} alt="Category Image"/>
                </div>

                {category.name}
            </Link>
    </div>
  )
}