import { CheckIcon, PlusIcon } from "@heroicons/react/20/solid";
import { MouseEvent, useContext } from "react";
import GlobalContext from "../../contexts/global";
import ProductProps from "../../types/product";
import "./index.css";

const Card = (item: ProductProps) => {
	const {
		count,
		setCount,
		setCartProducts,
		cartProducts,
		setIsOpen,
		isOpen,
		setShowProduct,
		setIsCheckoutOpen,
		isCheckoutOpen,
	} = useContext(GlobalContext);

	const handleAddProductToCard = (item: ProductProps, event: MouseEvent) => {
		event.stopPropagation();
		setCount(count + 1);
		setCartProducts([...cartProducts, item]);
		setIsCheckoutOpen(true);
		// setIsOpen(false);

		if (isOpen) {
			setIsOpen(false);
			setIsCheckoutOpen(true);
		}

		// console.log("products", cartProducts);
	};

	const handleShowProduct = (
		item: ProductProps,
		e: MouseEvent<HTMLDivElement>
	) => {
		const target = e.target as HTMLElement;

		if (!target.classList.contains("add")) {
			setShowProduct(item);
			setIsOpen(!isOpen);
		}

		if (isCheckoutOpen) {
			setIsOpen(true);
			setIsCheckoutOpen(false);
		}
	};

	return (
		<div
			className="bg-gray-200 cursor-pointer w-56 h-80 rounded-xl overflow-hidden m-2 flex flex-col"
			onClick={(e) => {
				handleShowProduct(item, e);
			}}
		>
			<figure className="relative w-full h-4/5">
				<span className="category absolute bottom-1 right-1 bg-white rounded-lg text-xs px-3 py-1 font-semibold">
					{item.category.name}
				</span>
				<img src={item.images[2]} className="w-full h-full object-cover" />
				{cartProducts.filter((p) => p.id === item.id).length > 0 ? (
					<CheckIcon className="add absolute top-2 right-2 flex justify-center items-center font-bold bg-emerald-500 w-6 h-6 rounded-full text-xl " />
				) : (
					<PlusIcon
						className="add absolute top-2 right-2 flex justify-center items-center font-bold bg-white w-6 h-6 rounded-full text-xl "
						onClick={(event) => handleAddProductToCard(item, event)}
					/>
				)}
			</figure>
			<p className=" flex flex-1 justify-between items-center px-3 py-2">
				<span className="flex-1 item-name text-sm font-semibold px-3">
					{item.title}
				</span>
				<span className="flex price text-lg font-semibold">$ {item.price}</span>
			</p>
		</div>
	);
};

export default Card;
