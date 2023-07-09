import { useContext } from "react";
import GlobalContext from "../../contexts/global";
import "./index.css";

const ProductDetail = () => {
	const { isOpen, setIsOpen, showProduct } = useContext(GlobalContext);

	const handleCloseProductDetail = () => {
		setIsOpen(!isOpen);
	};

	return (
		<aside
			className={`flex-col fixed right-0 border border-black rounded-b-2xl bg-white w-[300px] h-screen ${
				isOpen ? "flex" : "hidden"
			}`}
		>
			<div className="flex justify-between items-center p-3">
				<h2 className="font-bold text-xl">Detail</h2>
				<span
					className="delete hover:cursor-pointer"
					onClick={() => handleCloseProductDetail()}
				></span>
			</div>

			<figure className="p-4">
				<img
					className="w-full h-full rounded-xl object-cover"
					src={showProduct.images[2]}
					alt={showProduct.title}
				/>
			</figure>
			<p className="flex flex-col p-6">
				<span className="font-semibold text-2xl">${showProduct.price}</span>
				<span className="font-semibold text-lg">{showProduct.title}</span>
				<span className="font-light text-sm text-justify mt-2">
					{showProduct.description}
				</span>
			</p>
		</aside>
	);
};

export default ProductDetail;
