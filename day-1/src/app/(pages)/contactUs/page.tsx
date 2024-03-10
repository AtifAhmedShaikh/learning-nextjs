import { Metadata } from "next";
import Image from "next/image";
import demoImage from "/public/demoImage.jpg";
import Script from "next/script";

const ContactUsPage = () => {
	return (
		<div>
			Contact us page
			<div className="container">
				<Image quality={20} priority={true} src={demoImage} width={70} height={70} alt="Picture of website owner" />
			</div>
			<Script>alert("Hello from contact")</Script>
		</div>
	);
};

export const metadata: Metadata = {
	title: "Contact us Page Title ",
	description: "Here is an title of contact page description ",
};

export default ContactUsPage;
