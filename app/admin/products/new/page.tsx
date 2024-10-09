import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";

export default function NewProduct() {
  return (
    <>
      <Heading >New Product</Heading>

      <AddProductForm >
        {/* as a children to allow use it as a server component within client component */}
        <ProductForm />
      </AddProductForm>

    </>
  )
}
