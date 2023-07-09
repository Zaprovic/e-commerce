import ProductProps from "../types/product";

export const totalPrice = (products: ProductProps[]) =>
	products.reduce((sum, product) => sum + product.price, 0);
