import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <Heading >Product not found</Heading>
      <Link 
        href={'/admin/products'}
        className="bg-orange-100 text-orange-600 rounded-xl px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto hover:bg-orange-200 transition-colors"
      >Go to products</Link>
    </div>
  )
}