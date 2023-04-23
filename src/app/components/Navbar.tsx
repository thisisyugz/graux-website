import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const Navbar = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between bg-gray-950 p-4">
			<div className="mr-6 flex flex-shrink-0 items-center text-white">
				<Image src={logo} className="w-20" alt="grauxLogo"></Image>
			</div>

			<div className="block w-full flex-grow sm:flex sm:w-auto sm:items-center">
				<div className="flex justify-end text-lg sm:flex-grow">
					<Link href="#" className="mr-8 mt-4 block text-teal-200 hover:text-white sm:mt-0 sm:inline-block">
						<p>Documentation</p>
					</Link>
					<Link href="#" className="mr-8 mt-4 block text-teal-200 hover:text-white sm:mt-0 sm:inline-block">
						<p>Product</p>
					</Link>
					<Link href="#" className="mr-8 mt-4 block text-teal-200 hover:text-white sm:mt-0 sm:inline-block">
						<p>Provider</p>
					</Link>
					<Link href="#" className="mr-5 mt-4 block text-teal-200 hover:text-white sm:mt-0 sm:inline-block">
						<p>About</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
