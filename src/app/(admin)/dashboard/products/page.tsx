import { prismaCliente } from "@/lib/prisma";

const ProductsPage = async () => {

    const products = await prismaCliente.product.findMany()

    return ( <h1>Products</h1> );
}
 
export default ProductsPage;