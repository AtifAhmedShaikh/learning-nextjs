interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const getUsersListFromApi = async (): Promise<Todo[]> => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await response.json();
	return data;
};

const UsersPage = () => {
	return (
		<>
			<div className="text-center flex flex-col justify-start items-center">
				<div className="">
					<p>Hi from users page </p>
					{getUsersListFromApi().then((data) =>
						data.map((item) => {
							return (
								<div key={item.id} className="px-10 py-4 border text-white rounded-md mb-5 w-fit">
									<span>{item.title}</span>
								</div>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

export default UsersPage;
