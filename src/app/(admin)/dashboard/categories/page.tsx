import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prismaCliente } from "@/lib/prisma";
import { ListOrderedIcon, PlusIcon } from "lucide-react";

const CategoriesPage = async () => {

    const categories = await prismaCliente.category.findMany({
        include: {
            products:{
                select: {
                    id: true
                }
            }
        }
    })

  return (
    <div className="flex w-full flex-col gap-10 p-10">
      <Badge variant="heading">
        <ListOrderedIcon size={16} />
        Categorias
      </Badge>

      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-bold">
          Categorias encontrados: {categories.length}
        </p>

        <Button className="flex gap-2">
          <PlusIcon size={18} />
          Adicionar categoria
        </Button>
      </div>

      
    </div>
  );
};

export default CategoriesPage;
