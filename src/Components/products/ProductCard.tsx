import { FaStar } from "react-icons/fa";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <article className="product-card w-[48%] max-w-60 bg-stone-50 p-4 rounded-xl h-64 bg-opacity-30 flex flex-col gap-5 ">
      <figure className="image-container w-full flex justify-center items-center  h-full">
        <img src={product.imageLink} alt={product.name} />
      </figure>
      <section className="flex justify-between">
        <h2 className="text-stone-50">{product.name}</h2>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          {product.rating}
        </div>
      </section>
    </article>
  );
};

export default ProductCard;
