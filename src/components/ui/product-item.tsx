import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image src={product.imageUrls[0]} height={0} width={0} sizes="100vw" className="h-auto max-h-[70%] w-auto max-w-[80%]" style={{objectFit: "contain"}} alt={product.name}/>
      </div>
      
      <div>
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis w-full">{product.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
