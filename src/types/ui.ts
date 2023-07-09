import { Dispatch, SetStateAction } from "react";
import OrderProps from "../types/order";
import ProductProps from "../types/product";

export default interface UIProps<T> {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
	isOpen: boolean;
	isCheckoutOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	showProduct: ProductProps;
	setShowProduct: Dispatch<SetStateAction<ProductProps>>;
	cartProducts: ProductProps[];
	setCartProducts: Dispatch<SetStateAction<ProductProps[]>>;
	checked: boolean;
	setIsCheckoutOpen: Dispatch<SetStateAction<boolean>>;
	setChecked: Dispatch<SetStateAction<boolean>>;
	order: OrderProps[];
	setOrder: Dispatch<SetStateAction<OrderProps[]>>;
	setOrderToShow: Dispatch<SetStateAction<OrderProps>>;
	orderToShow: OrderProps;
	titleSearch: string;
	setTitleSearch: Dispatch<SetStateAction<string>>;
	clickedCategory: string;
	setClickedCategory: Dispatch<SetStateAction<string>>;
	items: T;
	setItems: Dispatch<SetStateAction<T>>;
}
