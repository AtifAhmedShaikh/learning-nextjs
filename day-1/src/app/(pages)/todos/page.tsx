interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

// server
const TodosPage = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data: Todo[] = await response.json();
	return (
		<>
			<div className="text-center flex flex-col justify-start items-center">
				<div className="">
					<p>Hi from Todo page </p>
					{data.map((item) => {
						return (
							<div key={item.id} className="px-10 py-4 border text-white rounded-md mb-5 w-fit hover:bg-slate-700">
								<span>{item.title}</span>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default TodosPage;
