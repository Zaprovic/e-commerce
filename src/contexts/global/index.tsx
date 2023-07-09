import { createContext } from "react";
import ProductProps from "../../types/product";
import UIProps from "../../types/ui";

const defaultContext: UIProps<ProductProps[]> = {
	count: 0,
	setCount: () => {},
	isOpen: false,
	setIsOpen: () => {},
	isCheckoutOpen: false,
	setIsCheckoutOpen: () => {},
	showProduct: {
		id: 0,
		title: "",
		price: 0,
		description: "",
		category: {
			id: 0,
			name: "",
			image: "",
		},
		images: [],
	},
	setShowProduct: () => {},
	cartProducts: [],
	setCartProducts: () => {},
	checked: false,
	setChecked: () => {},
	order: [],
	setOrder: () => {},
	orderToShow: {
		id: "",
		date: "",
		products: [],
		totalProducts: 0,
		totalPrice: 0,
	},
	setOrderToShow: () => {},
	titleSearch: "",
	setTitleSearch: () => {},
	clickedCategory: "",
	setClickedCategory: () => {},
	items: [],
	setItems: () => {},
};

const GlobalContext = createContext(defaultContext);

export default GlobalContext;
