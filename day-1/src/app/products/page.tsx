"use client";
import ProductServices from "@/services/index";
import Link from "next/link";

const ProductsPage = async () => {
	const data = await ProductServices.fetchAllProducts();

	return (
		<>
			<div className="text-center flex flex-col justify-start items-center">
        <Link href={"/"}>Home </Link>
				<div>
					<p>Hi from products page </p>
					{data.map((item) => {
						return (
							<div key={item.id} className="px-10 py-4 border text-white rounded-md mb-5 w-fit">
								<span>{item.title}</span>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

// export const metadata={
//   title:"Products Page Title !"
// }

export default ProductsPage;
