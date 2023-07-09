import { XMarkIcon } from "@heroicons/react/20/solid";
import { FC, useContext } from "react";
import GlobalContext from "../../contexts/global";
import ProductProps from "../../types/product";

const OrderCard: FC<ProductProps> = ({ id, title, images: img, price }) => {
	const { cartProducts, setCartProducts, setCount, count } =
		useContext(GlobalContext);

	const handleDelete = (id: number) => {
		const filteredProducts = cartProducts.filter((p) => p.id !== id);
		setCartProducts(filteredProducts);
		setCount(count - 1);
	};
	return (
		<div className="flex justify-between items-center px-4 mb-8 gap-4">
			<div className="flex items-center gap-4">
				<figure className="w-32 h-32">
					<img
						src={img[2]}
						alt=""
						className="w-full h-full rounded-lg object-cover"
					/>
				</figure>

				<p className="text-md font-light flex-wrap">{title}</p>
			</div>

			<div className="flex items-center gap-2 ">
				<p className="font-semibold text-xl flex-nowrap">${price}</p>
				<XMarkIcon
					className="w-6 h-6 cursor-pointer ml-4"
					onClick={() => {
						handleDelete(id);
					}}
				/>
			</div>
		</div>
	);
};

export default OrderCard;
