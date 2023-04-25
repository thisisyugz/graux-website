import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import InfoBlock from "./components/InfoBlock";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
	return (
		<>
			<Header />
			<InfoBlock orderFirst="order-1" orderSecond="order-2" />
			<InfoBlock orderFirst="order-2" orderSecond="order-1" />
			<InfoBlock orderFirst="order-1" orderSecond="order-2" />
			<InfoBlock orderFirst="order-2" orderSecond="order-1" />
		</>
	);
};

export default HomePage;
