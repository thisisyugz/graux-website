import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Nodes from "../../public/nodes.jpg";
import Header from "./components/Header";
import InfoBlock from "./components/TextImage";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
	return (
		<>
			<Header />
			<InfoBlock orderFirst="order-1" orderSecond="order-2" heading="" text="This is some sample text!!!" />
			<InfoBlock orderFirst="order-2" orderSecond="order-1" heading="" text="This is some sample text!!!" />
			<InfoBlock orderFirst="order-1" orderSecond="order-2" heading="" text="This is some sample text!!!" />
			<InfoBlock orderFirst="order-2" orderSecond="order-1" heading="" text="This is some sample text!!!" />
		</>
	);
};

export default HomePage;
