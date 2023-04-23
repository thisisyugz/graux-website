import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="bg-purple-400">
			<div className="header-height container mx-auto px-0 pt-24 text-center">
				<h1 className="text-center text-6xl font-bold">
					Decentralization for
					<br />
					Applications
				</h1>
				<p className="mt-8 text-2xl">Complete Decentralization for Applications</p>
				<div className="mx-auto mt-12 flex w-1/2 justify-between">
					<button className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-blue-400 hover:bg-purple-800">How to Ask</button>
					<button className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-blue-400 hover:bg-purple-800">
						Your Girlfriend To Have
					</button>
					<button className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-blue-400 hover:bg-purple-800">Sex with You</button>
				</div>
				<div className="mt-10 inline-block h-60 w-96 bg-red-600"></div>

				{/* CARDS */}

				{/* <!-- CARD COLUMNS --> */}
				<div className="container mx-auto mt-5 px-2">
					{/* <!-- Flex on med screens and up --> */}
					<div className="md:flex">
						<div className="m-2 flex-1 rounded bg-gray-400 px-5 py-5 text-center text-gray-700">
							<div className="lg:flex lg:items-center">
								<div className="lg:flex-shrink-0">
									<img className="rounded-lg lg:w-64" src="https://i.ibb.co/mJJNkTJ/img2.jpg" alt="" />
								</div>
								<div className="mt-4 lg:ml-6 lg:mt-0">
									<div className="text-sm font-bold uppercase tracking-wide text-indigo-600">Networking</div>
									<a href="#" className="mt-1 block text-lg font-semibold leading-tight text-gray-900 hover:underline">
										Finding connections to help your business grow
									</a>
								</div>
							</div>
						</div>
						<div className="m-2 flex-1 rounded bg-gray-400 px-5 py-5 text-center text-gray-700">
							<div className="lg:flex lg:items-center">
								<div className="lg:flex-shrink-0">
									<img
										className="rounded-lg lg:w-64"
										src="https://i.ibb.co/w4wGYvQ/img1.jpg
"
										alt=""
									/>
								</div>
								<div className="mt-4 lg:ml-6 lg:mt-0">
									<div className="text-sm font-bold uppercase tracking-wide text-indigo-600">Marketing</div>
									<a href="#" className="mt-1 block text-lg font-semibold leading-tight text-gray-900 hover:underline">
										Finding customers for your new business
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
