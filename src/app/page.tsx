import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
	return (
		<>
			<Header />
		</>
	);
};

export default HomePage;
