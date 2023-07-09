import { ChangeEvent, useContext, useState } from "react";
import Card from "../../components/Card/";
import ProductDetail from "../../components/ProductDetail";
import GlobalContext from "../../contexts/global";

const Home = () => {
	const { items } = useContext(GlobalContext);

	const [searchTitle, setSearchTitle] = useState("");

	const handleTitleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTitle(e.target.value);
	};

	const titleFilter = items?.filter((p) =>
		p.title.toLowerCase().includes(searchTitle.toLowerCase())
	);

	const currentPath = window.location.pathname;

	// filtering categories
	const clothesFilter = items?.filter((p) => p.category.name === "Clothes");
	const electronicsFilter = items?.filter(
		(p) => p.category.name === "Electronics"
	);
	const furnitureFilter = items?.filter((p) => p.category.name === "Furniture");
	const othersFilter = items?.filter(
		(p) => p.category.name !== "Clothes" || "Electronics" || "Furniture"
	);

	return (
		<>
			<div className="flex flex-col items-end gap-3">
				<h1 className="p-4 text-5xl font-bold text-center">
					Exclusive Products
				</h1>
				<input
					type="text"
					value={searchTitle}
					placeholder="Search your products here"
					className="p-4 border border-black rounded-xl w-full mb-8 focus:outline-none"
					onChange={(event) => handleTitleSearch(event)}
				/>
			</div>

			<div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center w-full ">
				{currentPath === "/" &&
					titleFilter?.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							title={item.title}
							price={item.price}
							category={item.category}
							images={item.images}
							description={item.description}
						/>
					))}

				{currentPath === "/" &&
					items?.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							title={item.title}
							price={item.price}
							category={item.category}
							images={item.images}
							description={item.description}
						/>
					))}

				{currentPath === "/clothes" &&
					clothesFilter?.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							title={item.title}
							price={item.price}
							category={item.category}
							images={item.images}
							description={item.description}
						/>
					))}
				{currentPath === "/electronics" &&
					electronicsFilter?.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							title={item.title}
							price={item.price}
							category={item.category}
							images={item.images}
							description={item.description}
						/>
					))}

				{currentPath === "/furniture" &&
					furnitureFilter?.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							title={item.title}
							price={item.price}
							category={item.category}
							images={item.images}
							description={item.description}
						/>
					))}

				{currentPath === "/others" &&
					othersFilter?.map((item) => (
						<Card
							id={item.id}
							key={item.id}
							title={item.title}
							price={item.price}
							category={item.category}
							images={item.images}
							description={item.description}
						/>
					))}
			</div>
			<ProductDetail />
		</>
	);
};

export default Home;
