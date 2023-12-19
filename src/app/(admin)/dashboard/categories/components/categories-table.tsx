import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Category, Prisma } from "@prisma/client";

interface CategoriesTableProps {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: {
        select: {
          id: true;
        };
      };
    };
  }>[];
}

const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Porcentagem das vendas</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((categorie) => (
          <TableRow key={categorie.id}>
            <TableCell>{categorie.name}</TableCell>
            <TableCell>{categorie.products.length}</TableCell>
            <TableCell>0%</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoriesTable;
