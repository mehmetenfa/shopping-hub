import React, { useEffect } from 'react'
import './CartPage.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart, toggleCartQty, getCartTotal, clearCart } from '../../store/cartSlice'
import { formatPrice } from '../../utils/helpers'

const CartPage = () => {
  const dispatch = useDispatch()
  const {data: cartProducts, totalItems, totalAmount, deliveryCharge } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [useSelector(state => state.cart)])

  const emptyCartMsg = <h4 className='text-red fw-6'>No items found!</h4>
  return (
    <div>CartPage</div>
  )
}

export default CartPage