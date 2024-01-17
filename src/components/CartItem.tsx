"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/payload-types";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image"

const CartItem = ({ product }: {product: Product}) => {

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label

  const { removeItem } = useCart()

  const { image } = product.images[0]

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {typeof image !== "string" && image.url ? (
              <Image src={image.url} alt={product.name} fill 
              className="absolute object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon 
                aria-hidden="true" 
                className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">{product.name}</span>
            <span className="line-clamp-1 text-sm capitalize text-muted-foreground">
              {label}
            </span>

            <div className="mt-4 text-sx text-muted-foreground">
              <button onClick={() => removeItem(product.id)}
              className="flex items-center gap-0.5">
                <X className="w-3 h-4" />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
