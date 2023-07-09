const categories = ["Clothes", "Toys", "Electronics", "Other"];

const products = [];

for (let i = 0; i < 20; i++) {
	const product = {
		id: Math.floor(Math.random() * 1000), // Random number between 0 and 999
		title: `Product ${i + 1}`,
		price: Math.random() * 100, // Random number between 0 and 99.99
		description: `Description for Product ${i + 1}`,
		category: {
			id: i % 4, // Assigns category index based on the remainder of i divided by 4
			name: categories[i % 4],
			image: `image${i + 1}.jpg`,
		},
		images: [`image${i + 1}.jpg`, `image${i + 2}.jpg`, `image${i + 3}.jpg`],
	};

	products.push(product);
}

const clothesFilter = products.filter((p) => p.category.name === "Clothes");

console.log(clothesFilter.length);
