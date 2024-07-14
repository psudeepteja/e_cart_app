import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../../feature/asyncThunk";
import ProductCard from "../../components/ProductCard";

export default function Plp() {
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch();
  const { categoryId } = useParams()

  useEffect(() => {
    dispatch(getProductsApi(`/products/category/${categoryId}`))
  }, [categoryId])

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} >
          <ProductCard product={product} categoryId={categoryId} />
        </div>
      ))}
    </div>
  );
}

