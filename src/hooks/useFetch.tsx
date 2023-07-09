import { useEffect, useState } from "react";

const useFetch = <T,>(api: string, initialState: T) => {
	const [items, setItems] = useState(initialState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(api);
				const data: T = await response.json();
				setItems(data);
				console.log(data);
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, []);

	return { items, setItems };
};

export default useFetch;
