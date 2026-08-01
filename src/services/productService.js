import api from './api'

export const getAllProducts = async (limit = 20, skip = 0) => {
  const response = await api.get(`/products?limit=${limit}&skip=${skip}`)
  return response.data
}

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const getCategories = async () => {
  const response = await api.get('/products/categories')
  return response.data
}

export const getProductsByCategory = async (category) => {
  const response = await api.get(`/products/category/${category}`)
  return response.data
}

export const searchProducts = async (query) => {
  const response = await api.get(`/products/search?q=${query}`)
  return response.data
}