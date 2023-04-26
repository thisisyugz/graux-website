import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Footer = () => {
	return (
		<div className="h-40 bg-gray-950">
			<div className="md:align-center mx-auto flex w-5/6 md:justify-between">
				<Link href="/">
					<Image src={logo} className="w-20" alt="logo"></Image>
				</Link>
				<div className="socials">
					<h1 className="text-white">Contact Us</h1>
				</div>
				<div className="links">
					<pre className="text-rose-400">Link 1 Link 2 Link 3</pre>
				</div>
			</div>
		</div>
	);
};

export default Footer;
