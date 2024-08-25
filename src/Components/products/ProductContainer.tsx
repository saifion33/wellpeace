import { ImSpinner2 } from "react-icons/im";
import ProductCard from "./ProductCard";

interface IProps {
  products: IProduct[] | null;
  loading: boolean;
}
const ProductContainer = ({ products, loading }: IProps) => {
  console.log(products)
  return (
    <section className="products-container max-w-6xl mx-auto ">
      <main className="flex flex-wrap justify-center gap-3  py-4">
        {(!loading &&
          products )&&
          products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        {loading && (
          <div className="min-h-full flex justify-center items-center w-full">
            <ImSpinner2 className="text-5xl text-stone-50 animate-spin" />
          </div>
        )}
      </main>
    </section>
  );
};

export default ProductContainer;
