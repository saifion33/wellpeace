import ProductCard from "./ProductCard"
import stressBallImage from "../../assets/images/product-ball.svg"
import fidgetSpinnerImage from "../../assets/images/product-fidget-spinner.svg"
import essentialOilImage from "../../assets/images/product-oil.svg"
import fidgetCubeImage from "../../assets/images/product-rubic-cube.svg"

const ProductContainer = () => {
    const products:IProduct[]=[
        {_id:"pr1",name:"Stress Ball",description:"This stress release ball help in mental stress",imageLink:stressBallImage,rating:4.6,price:250},
        {_id:"pr2",name:"Fidget Spinner",description:"Live joyfull movement with fidget spinner",imageLink:fidgetSpinnerImage,rating:4.4,price:250},
        {_id:"pr3",name:"Essential Oil",description:"Destress with aroma",imageLink:essentialOilImage,rating:4.8,price:250},
        {_id:"pr4",name:"Fidget Cube",description:"Destress Fidget Cube",imageLink:fidgetCubeImage,rating:4.9,price:250},
      ]
  return (
    <section className="products-container flex flex-wrap justify-between gap-3 py-4">
        {
            products.map(product=>{
                return <ProductCard key={product._id} product={product} />
            })
        }
    </section>
  )
}

export default ProductContainer