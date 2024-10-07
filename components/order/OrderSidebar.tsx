import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";

async function getCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}

export default async function OrderSidebar() {
  const categories = await getCategories();

  return (
    <div className="md:w-72 md:h-screen bg-white">
      <Logo />
      <nav className="mt-10">
        {categories.map(category => <CategoryIcon 
          key={category.name}
          category={category}
        />)}
      </nav>
    </div>
  );
}
