const fetchUsers = async () => {
	try {
		const response = await fetch("http://localhost:3000/api/users");
		const usersData = await response.json();
		return usersData;
	} catch (error) {
		console.log(error);
	}
};

const ProductsPage = async () => {
	const data = await fetchUsers();
	return (
		<div>
			<p>
				products page
				{JSON.stringify(data)}
			</p>
		</div>
	);
};

export default ProductsPage;
