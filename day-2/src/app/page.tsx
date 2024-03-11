import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Home Page
			<Link href={"/users"}>users page</Link>
			<Link href={"/products"}>products page</Link>
		</main>
	);
}
