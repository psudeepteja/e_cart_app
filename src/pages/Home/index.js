import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategoryApi } from '../../feature/asyncThunk'
import Card from '../../components/Card'

const categoryImages = {
  "electronics": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  "jewelery": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  "men's clothing": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "women's clothing": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
};

export default function Home() {
  const { category } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!category.length) {
      dispatch(getCategoryApi("products/categories"))
    }
  }, [])

  const result = category.map(category => ({
    categoryName: category,
    image: categoryImages[category]
  }));

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 my-2 mx-4">
      {result.map((i, idx) => (
        <Link key={idx} to={`/products/category/${i.categoryName}`}>
          <Card
            title={i.categoryName}
            image={i.image}
          />
        </Link>
      ))
      }
    </div>
  )
}
