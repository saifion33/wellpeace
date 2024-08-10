import { FaSearch } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProductContainer from "./ProductContainer";
import BottomNavigation from "../common/BottomNavigation";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../redux/actions/products";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");

  const filterFunction = (product: IProduct) => {
    const reg = new RegExp(searchQuery, "gi");
    if (searchQuery.length <= 0) {
      return product.name;
    }
    return product.name.match(reg);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-custom-background-gradient bg-fixed min-h-screen max-w-md mx-auto">
      <header className="sticky top-0 left-0 w-full justify-between bg-lightBlue bg-opacity-30 backdrop-blur-md p-3">
        <section className="flex items-center justify-between mt-2 text-stone-50">
          <MdArrowBackIos onClick={() => navigate(-1)} className="" />
          <p className="mx-auto">Products</p>
        </section>
        <section className="flex items-center gap-3 mt-4 bg-stone-50  bg-opacity-40 text-slate-800 p-2 rounded">
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none"
            value={searchQuery}
            onChange={handleChange}
          />
          <FaSearch className="text-xl" />
        </section>
      </header>
      <main className="px-4 min-h-screen">
        <ProductContainer products={products?.filter(product=>filterFunction(product)) || null} loading={loading} />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default ProductPage;
