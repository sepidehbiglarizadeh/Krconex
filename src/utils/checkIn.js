const checkIn = (cart,product) => {
    return cart.find((c) => c.id === product.id);
}
 
export default checkIn;