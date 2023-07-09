import { XMarkIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import GlobalContext from "../../contexts/global";
import OrderProps from "../../types/order";
import { totalPrice } from "../../utils/index";
import OrderCard from "../OrderCard";
import "./index.css";

const CheckoutSideMenu = () => {
	const {
		isCheckoutOpen,
		setIsCheckoutOpen,
		cartProducts,
		setCartProducts,
		setOrder,
		order,
		// orderToShow,
	} = useContext(GlobalContext);

	const handleCloseCheckout = () => {
		setIsCheckoutOpen(false);
	};

	const handleCheckout = () => {
		const orderToAdd: OrderProps = {
			id: v4(),
			date: "",
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
		};

		setOrder([...order, orderToAdd]);
		setCartProducts([]);
	};

	return (
		<aside
			className={` h-[calc(100vh-60px)] flex-col fixed top-[60px] right-0 pb-6 border-l-2 border-gray-400 bg-white w-[400px] ${
				isCheckoutOpen ? "flex" : "hidden"
			}`}
		>
			<div className="flex justify-between items-center p-3 mb-4 ">
				<h2 className="font-bold text-xl">My order</h2>
				<XMarkIcon
					className="delete hover:cursor-pointer"
					onClick={() => handleCloseCheckout()}
				/>
			</div>

			<div className="flex flex-col h-full overflow-y-scroll">
				<div className="flex-1">
					{cartProducts.map((p) => (
						<OrderCard
							key={p.id}
							title={p.title}
							images={p.images}
							price={p.price}
							category={p.category}
							description={p.description}
							id={p.id}
						/>
					))}
				</div>

				<div className="px-6 pt-6 h-auto">
					<p className="flex justify-between items-baseline">
						<span className="font-semibold text-xl mb-7">Total</span>
						<span className="font-bold text-2xl">
							${totalPrice(cartProducts)}
						</span>
					</p>
					<Link to={"/my-orders/last"}>
						<button
							className="w-full h-auto bg-slate-800 py-3 text-white font-bold hover:bg-slate-600 text-2xl rounded-xl"
							onClick={() => handleCheckout()}
						>
							Checkout
						</button>
					</Link>
				</div>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
