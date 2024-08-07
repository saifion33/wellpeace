import { FaSearch } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProductContainer from "./ProductContainer";

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-custom-background-gradient h-screen">
      <header className="sticky top-0 left-0 lg:flex w-full justify-between bg-lightBlue bg-opacity-30 backdrop-blur-md p-3">
        <section className="flex items-center justify-between mt-2 text-stone-50 lg:w-5/6">
          <MdArrowBackIos onClick={() => navigate(-1)} className="" />
          <p className="mx-auto">Products</p>
        </section>
        <section className="flex items-center gap-3 mt-4 bg-stone-50 text-stone-50 bg-opacity-40 p-2 rounded">
            <input type="text" className="w-full bg-transparent focus:outline-none" />
            <FaSearch className="text-xl"/>
        </section>
      </header>
      <main className="px-4">
        <ProductContainer/>
      </main>
    </div>
  );
};

export default ProductPage;
