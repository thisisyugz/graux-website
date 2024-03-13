import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMedium, FaTwitter } from "react-icons/fa";
import logo from "../../../public/logo.png";

const Footer = () => {
	return (
		<>
			<div className="h-40 bg-gray-950 pb-2">
				<div className="mx-auto flex h-5/6 w-5/6 items-center justify-between">
					<Link href="/">
						<Image src={logo} className="w-20" alt="logo"></Image>
					</Link>
					<div className="socials">
						<h1 className="text-xl text-white">Contact Us</h1>
						<div className="mx-auto mt-3 flex w-full justify-between">
							<FaTwitter className="cursor-pointer text-2xl text-white hover:text-twitterBlue" />
							<FaMedium className="cursor-pointer text-2xl text-white hover:text-mediumGreen" />
							<FaEnvelope className="cursor-pointer text-2xl text-white hover:text-gray-400" />
						</div>
					</div>
					<div className="links text-white">
						<ul>
							<li>
								<Link href="#">Link 1</Link>
							</li>
							<li>
								<Link href="#">Link 2</Link>
							</li>
							<li>
								<Link href="#">Link 3</Link>
							</li>
						</ul>
					</div>
				</div>
				<p className="text-center text-lg text-white">Copyright &copy; GrauxLabs</p>
			</div>
		</>
	);
};

export default Footer;
