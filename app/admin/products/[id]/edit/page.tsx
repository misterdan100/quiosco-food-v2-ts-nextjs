import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    notFound();
    return;
  }
  return product;
}

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(+params.id);

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading>
          Edit Product <span className="font-bold">{product?.name}</span>
        </Heading>

        <GoBackButton />
      </div>

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
}
