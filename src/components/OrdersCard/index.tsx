import { CalendarIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type props = {
	id: string;
	totalPrice: number;
	totalProducts: number; // This one has to be product props type
	clickOrder: () => void;
};

const OrdersCard = ({ totalPrice, totalProducts, clickOrder }: props) => {
	return (
		<div>
			<div
				className="flex gap-10 bg-slate-300 p-4 w-fit rounded-xl items-center m-4"
				onClick={() => clickOrder()}
			>
				<div className="flex flex-col gap-3 items-center">
					<div className="flex gap-3 items-center">
						<CalendarIcon className="w-6 h-6" />
						<h5 className="font-semibold text-sm">01/02/2023</h5>
					</div>
					<div className="flex justify-between items-center gap-6">
						<ShoppingBagIcon className="w-6 h-6" />
						<h5 className="font-semibold text-sm">{totalProducts} articles</h5>
					</div>
				</div>

				<div className="flex gap-3 items-center">
					<h5 className="font-bold text-2xl">${totalPrice}</h5>
					<ChevronRightIcon className="w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default OrdersCard;
