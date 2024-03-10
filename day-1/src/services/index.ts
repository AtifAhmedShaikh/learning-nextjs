
interface Product {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

class ProductServices {
	async fetchAllProducts() {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos");
		const data: Product[] = await response.json();
		return data;
	}
}

export default new ProductServices();
