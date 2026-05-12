import { useState } from "react";
import { ICardItem } from "../interfaces";
import toast from "react-hot-toast";
import { useCart } from "../Context/CartContext";
import { api } from "../services/api";
import { useRouter } from "next/navigation";

const useProduct = () => {
  // router navigation
  const router = useRouter();

  // cart context
  const { addToCart } = useCart();

  // state product
  const [product, setProduct] = useState({} as ICardItem);
  // state dialog
  const [isOpen, setIsOpen] = useState(false);

  // functions handler

  // updateProductHandler
  const updateProductHandler = (product: ICardItem) => {
    // catch with product
    setProduct(product);
    // open dialog
    setIsOpen(true);
  };

  // deleteProductHandler
  const deleteProductHandler = async (_id: string) => {
    // comfirm catalog
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      try {
        // delete product logic here
        await api.delete(`/api/products/${_id}`);

        // show toast
        toast.success("Product deleted successfully!");

        // reload page
        router.refresh();;
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to delete product!",
        );
      }
    }
  };

  // add to cart handler
  const addToCartHandler = (product: ICardItem) => {
    // catch with product
    setProduct(product);

    // add to cart context
    addToCart(product);

    setProduct({} as ICardItem);
  };

  const addProductHandler = () => {
    // open dialog
    setIsOpen(true);
  };

  return {
    updateProductHandler,
    deleteProductHandler,
    addToCartHandler,
    addProductHandler,
    isOpen,
    setIsOpen,
    product,
  };
};

export default useProduct;
