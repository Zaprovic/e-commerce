import { useRoutes } from "react-router-dom";
import Account from "../pages/Account";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import Orders from "../pages/Orders";
import SignIn from "../pages/SignIn";

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/my-account", element: <Account /> },
		{ path: "/my-order", element: <Order /> },
		{ path: "/my-orders", element: <Orders /> },
		{ path: "/my-orders/last", element: <Order /> },
		{ path: "/my-orders/:id", element: <Order /> },
		{ path: "/sign-in", element: <SignIn /> },
		{ path: "/*", element: <NotFound /> },
		{ path: "/clothes", element: <Home /> },
		{ path: "/electronics", element: <Home /> },
		{ path: "/furniture", element: <Home /> },
		{ path: "/others", element: <Home /> },
	]);

	return routes;
};

export default AppRoutes;
