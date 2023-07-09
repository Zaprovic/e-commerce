import { PropsWithChildren, useState } from "react";
import GlobalContext from "../../contexts/global";
import useFetch from "../../hooks/useFetch";
import OrderProps from "../../types/order";
import ProductProps from "../../types/product";

const GlobalProvider = ({ children }: PropsWithChildren) => {
	const [count, setCount] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
	const [showProduct, setShowProduct] = useState<ProductProps>({
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
	});
	const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);
	const [checked, setChecked] = useState(false);
	const [order, setOrder] = useState<OrderProps[]>([]);
	const [orderToShow, setOrderToShow] = useState<OrderProps>({
		id: "",
		date: "",
		products: [],
		totalProducts: 0,
		totalPrice: 0,
	});
	const [titleSearch, setTitleSearch] = useState("");
	const [clickedCategory, setClickedCategory] = useState("");
	const { items, setItems } = useFetch<ProductProps[]>(
		"https://api.escuelajs.co/api/v1/products",
		[]
	);

	return (
		<GlobalContext.Provider
			value={{
				count,
				setCount,
				isOpen, //this is for product detail
				setIsOpen, // this is for product detail as well
				isCheckoutOpen,
				setIsCheckoutOpen,
				showProduct,
				setShowProduct,
				cartProducts,
				setCartProducts,
				checked,
				setChecked,
				order,
				setOrder,
				orderToShow,
				setOrderToShow,
				titleSearch,
				setTitleSearch,
				clickedCategory,
				setClickedCategory,
				items,
				setItems,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
