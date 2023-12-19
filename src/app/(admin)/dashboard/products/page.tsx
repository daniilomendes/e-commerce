import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prismaCliente } from "@/lib/prisma";
import { PackageIcon, PlusIcon } from "lucide-react";
import ProductsTable from "./components/products-table";
import { computeProductTotalPrice } from "@/helpers/product";

const ProductsPage = async () => {
  const products = await prismaCliente.product.findMany();

  const productsWithTotalPrice = products.map((product) => ({
    ...product,
    totalPrice: computeProductTotalPrice(product),
  }));

  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <PackageIcon size={16} />
        Produtos
      </Badge>

      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-bold">
          Produtos encontrados: {products.length}
        </p>

        <Button className="flex gap-2">
          <PlusIcon size={18} />
          Adicionar produto
        </Button>
      </div>

      <ProductsTable products={productsWithTotalPrice} />
    </div>
  );
};

export default ProductsPage;
