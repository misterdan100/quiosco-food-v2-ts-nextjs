import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });

  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search);

  return (
    <>
      <Heading>
        Rearch results for:{" "}
        <span className="font-bold text-orange-600">{searchParams.search}</span>
      </Heading>

      <div className="flex flex-cold gap-5 lg:flex-row lg:justify-between">
        <Link
          href={"/admin/products/new"}
          className="bg-orange-100 text-orange-600 w-full lg:w-auto text-xl rounded-xl px-10 py-3 text-center font-semibold cursor-pointer hover:bg-orange-200 transition"
        >
          Create product
        </Link>

        <ProductSearchForm />
      </div>

      {products.length ? (
        <ProductTable products={products} />
      ) : (<p className="text-center text-lg ">There are not results</p>) }

    </>
  );
}
