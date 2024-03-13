import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const cormorantGaramond = Cormorant_Garamond({
	weight: "700",
	subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
});

export default function Header () {
	return (
		<header className="bg-black pb-20 pt-20 md:pt-28 h-screen">
			<div className="container mx-auto w-5/6 pt-24 text-center">
				<h1 className={`${cormorantGaramond.className} text text-center text-5xl text-white`}>
					Complete <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Decentralization</span> for
				</h1>
				<h1 className={`${cormorantGaramond.className} text mt-4 text-center text-7xl text-white`}>Web3 Automation & dApps</h1>
				<p className={`${libreBaskerville.className} mt-8 text-2xl text-gray-400`}>
					Automate & perform over hundreds of actions based on events triggered on-chain & off-chain.
				</p>
				<div className="mx-auto mt-12 flex w-5/12 justify-between">
					<Button variant="graux">Build on our IDE</Button>
					<Button variant="graux">App Interface</Button>
					<Button variant="graux">Marketplace</Button>
				</div>
			</div>
		</header>
	);
};