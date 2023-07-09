import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import OrderCard from "../../components/OrderCard";
import GlobalContext from "../../contexts/global";

const Order = () => {
	const { order, orderToShow } = useContext(GlobalContext);

	const currentPath = window.location.pathname;

	let idOrder: string | number | undefined =
		currentPath.match(/\/([^/]+)$/)?.[1];

	idOrder === "last" && (idOrder = order?.length - 1);

	// const orderToShow = order.find((item) => item.id === idOrder);
	// console.log("order to show", orderToShow);
	// console.log("order", order);

	return (
		<>
			<div className="flex w-80 items-center justify-center relative p-4">
				<Link to={"/my-orders"} className="absolute left-0">
					<ChevronLeftIcon className="w-6 h-6 cursor-pointer" />
				</Link>
				<h1 className="text-center text-xl font-bold">My order</h1>
			</div>
			<div className="flex flex-col">
				{orderToShow?.products?.map((item) => (
					<OrderCard
						key={item.id}
						title={item.title}
						images={item.images}
						price={item.price}
						category={item.category}
						description={item.description}
						id={item.id}
					/>
				))}
				{/* {order?.slice(-1)[0]?.products?.map((item) => (
					<OrderCard
						key={item.id}
						title={item.title}
						images={item.images}
						price={item.price}
						category={item.category}
						description={item.description}
						id={item.id}
					/>
				))} */}
			</div>
		</>
	);
};

export default Order;
