import React, { useEffect } from 'react'
import Slider from '../../components/Slider/Slider'
import Category from '../../components/Category/Category'
import ProductList from '../../components//ProductList/ProductList'
import SingleCategory from '../../components/SingleCategory/SingleCategory'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/productSlice'
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice'
import './HomePage.scss'

const HomePage = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {data: products, status: productsStatus} = useSelector((state) => state.product);
  const {cartProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    dispatch(fetchProductsByCategory(1, 'all'))
    dispatch(fetchProductsByCategory(2, 'all'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='home-page'>
      <Slider />
      <Category categories = {categories} status = {categoryStatus} />
      <ProductList categories = {products} status = {productsStatus} />
      <secion>
        { productsByCategory[0] && <SingleCategory products = {productsByCategory[0]} status = {catProductAllStatus} /> }
      </secion>
      <secion>
        { productsByCategory[1] && <SingleCategory products = {productsByCategory[1]} status = {catProductAllStatus} /> }
      </secion>
    </div>
  )
}

export default HomePage