const getProducts = async (route) => {
    const response = await fetch(route)
    const products = await response.json()
    return products
}

export { getProducts }
