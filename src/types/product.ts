export default interface ProductProps {
	id: number;
	title: string;
	price: number;
	description: string;
	category: {
		id: number;
		name: string;
		image: string;
	};
	images: string[];
}
