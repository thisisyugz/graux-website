import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import mainPhoto from "../../../public/mainphoto.jpg";
import Box from "../components/Box";
import Button from "../components/Button";

const cormorantGaramond = Cormorant_Garamond({
	weight: "700",
	subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
});

const Header = () => {
	return (
		<div className="bg-black pb-20">
			<div className="container mx-auto w-5/6 pt-24 text-center">
				<h1 className={`${cormorantGaramond.className} text text-center text-5xl text-white`}>
					Complete <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Decentralization</span> for
				</h1>
				<h1 className={`${cormorantGaramond.className} text mt-4 text-center text-7xl text-white`}>Web3 Automation & dApps</h1>
				<p className={`${libreBaskerville.className} mt-8 text-2xl text-gray-400`}>
					Automate & perform over hundreds of actions based on events triggered on-chain & off-chain.
				</p>
				<div className="mx-auto mt-12 flex w-5/12 justify-between">
					<Button text="Build on our IDE" />
					<Button text="App Interface" />
					<Button text="Marketplace" />
				</div>
				<Image src={mainPhoto} alt="decentralization" className="mx-auto mt-16 w-3/5"></Image>

				<div className="infoBoxes mt-5 h-96 px-5 pb-0 pt-10 align-top md:flex">
					<Box
						title="Create powerful crypto-tools"
						content="Use pre-made templates or over 180 logical blocks by simply dragging & dropping to create the equivalent of hundreds of lines of code in minutes."
					/>
					<Box
						title="For a fraction of a penny"
						content="Operations on GraphLinq only charge GLQ as gas based on nodes executed, thus making it extremely cheap to run a graph on our IDE."
					/>
					<Box
						title="Execute Your Graph"
						content="Automate actions like creating trade orders, sending a mail, creating a token or nft, alerting over social media or mobile and much more."
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
