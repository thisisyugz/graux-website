import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="bg-purple-400">
			<div className="header-height container mx-auto w-5/6 pt-24 text-center">
				<h1 className="text-center text-6xl font-bold">
					Decentralization for
					<br />
					Applications
				</h1>
				<p className="mt-8 text-2xl">Complete Decentralization for Applications</p>
				<div className="mx-auto mt-12 flex w-1/2 justify-between">
					<button className="bg-purple-600 text-white hover:bg-blue-400 hover:bg-purple-800z rounded px-4 py-2 font-bold">How to Ask</button>
					<button className="bg-purple-600 text-white hover:bg-blue-400 hover:bg-purple-800z rounded px-4 py-2 font-bold">
						Your Girlfriend To Have
					</button>
					<button className="bg-purple-600 text-white hover:bg-blue-400 hover:bg-purple-800z rounded px-4 py-2 font-bold">Sex with You</button>
				</div>
				<div className="bg-red-600 mt-10 inline-block h-60 w-96">Sexy 3D Animation Here</div>

				{/* CARDS */}

				{/* <!-- CARD COLUMNS --> */}
				<div className="mt-5 h-96 p-5 px-3 align-top md:flex">
					{/* <!-- Flex on med screens and up --> */}
					<div className="bg-white text-gray-700 mx-5 h-40 rounded px-5 py-5 text-center">
						<div className="mx-auto mt-4">
							<div className="text-indigo-600 text-xl font-bold tracking-wide">Create powerful crypto-tools</div>
							<Link href="#" className="text-gray-900 mt-2 block text-lg font-normal leading-tight hover:underline">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eaque.
							</Link>
						</div>
					</div>
					<div className="bg-white text-gray-700 mx-5 h-40 self-end rounded px-5 py-5 text-center">
						<div className="mx-auto mt-4">
							<div className="text-indigo-600 text-xl font-bold tracking-wide">For a fraction of a penny</div>
							<Link href="#" className="text-gray-900 mt-2 block text-lg font-normal leading-tight hover:underline">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eaque.
							</Link>
						</div>
					</div>
					<div className="bg-white text-gray-700 mx-5 h-40 rounded px-5 py-5 text-center">
						<div className="mx-auto mt-4">
							<div className="text-indigo-600 text-xl font-bold tracking-wide">Execute Your Graph</div>
							<Link href="#" className="text-gray-900 mt-2 block text-lg font-normal leading-tight hover:underline">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eaque.
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
