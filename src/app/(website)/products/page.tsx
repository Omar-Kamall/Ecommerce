import Card from "@/src/components/Card";
import { IProduct } from "@/src/interfaces";
export const metadata = {
  title: "Products",
  description: "Browse our collection of products",
};

const Products = async () => {
  // fetch data from api
  const res = await fetch("http://localhost:3000/api/products");
  const { data }: { data: IProduct[] } = await res.json();

  if (data?.length === 0)
    return <div className="min-h-screen">No products available.</div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5 min-h-screen">
        {data.length > 0 &&
          data.map((product) => (
            <div key={product._id}>
              <Card
                _id={product._id}
                title={product.title}
                description={product.description}
                category={product.category}
                image={product.image}
                stock={product.stock}
                price={product.price}
                discount={product.discount}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
