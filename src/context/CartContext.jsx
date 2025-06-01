"use client"

import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Load cart from localStorage when app starts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(cart)
  }, [])

  // Add item to cart
  const addToCart = (item) => {
    const updatedCart = [...cartItems, item]
    setCartItems(updatedCart)
    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index)
    setCartItems(updatedCart)
    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>
}
