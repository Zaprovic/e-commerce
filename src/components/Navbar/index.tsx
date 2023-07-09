import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../contexts/global";

const Navbar = () => {
	const { count, setClickedCategory } = useContext(GlobalContext);

	const activeStyle = "underline underline-offset-2";

	const leftItems = [
		{ name: "All", link: "/" },
		{ name: "Clothes", link: "/clothes" },
		{ name: "Electronics", link: "/electronics" },
		{ name: "Furniture", link: "/furniture" },
		{ name: "Others", link: "/others" },
	];

	const rightItems = [
		{ name: "My orders", link: "/my-orders" },
		{ name: "Account", link: "/my-account" },
		{ name: "Sign In", link: "/sign-in" },
		{ name: `🛒 ${count}`, link: "/" },
	];

	const handleCategory = (category: string) => {
		setClickedCategory(category);
	};

	return (
		<nav className="bg-slate-300 flex justify-between items-center fixed top-0 z-10 w-full py-4 px-8 text-sm font-semibold">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to={"/"}>Shopi</NavLink>
				</li>

				{leftItems.map((item) => (
					<li key={item.name}>
						<NavLink
							to={item.link}
							className={({ isActive }) => (isActive ? activeStyle : undefined)}
							onClick={() => handleCategory(item.name)}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>

			<ul className="flex items-center gap-3">
				<li className="text-black/40">user@email.com</li>
				{rightItems.map((item) => (
					<li key={item.name}>
						<NavLink
							to={item.link}
							className={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
