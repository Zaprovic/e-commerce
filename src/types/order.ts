import ProductProps from "./product";

export default interface OrderProps {
	id: string;
	date: string;
	products: ProductProps[];
	totalProducts: number;
	totalPrice: number;
}
