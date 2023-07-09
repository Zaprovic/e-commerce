import { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../../components/OrdersCard";
import GlobalContext from "../../contexts/global";
import OrderProps from "../../types/order";

const Orders = () => {
	const { order, setOrderToShow } = useContext(GlobalContext);

	const handleShowOrder = (id: string) => {
		// setOrderToShow()
		// console.log(order);

		const orderFinal = order.find((item) => item.id === id) as OrderProps;
		setOrderToShow(orderFinal);
	};

	// console.log("order to show", orderToShow);

	return (
		<>
			<h1 className="text-center text-xl font-bold p-4">My orders</h1>

			{order.map((item) => (
				<Link key={item.id} to={`/my-orders/${item.id}`}>
					<OrdersCard
						id={item.id}
						totalPrice={item.totalPrice}
						totalProducts={item.totalProducts}
						clickOrder={() => handleShowOrder(item.id)}
					/>
				</Link>
			))}
		</>
	);
};

export default Orders;
