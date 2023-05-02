import { Inter } from "next/font/google";
import Nodes from "../../public/nodes.jpg";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Info from "./components/Info";
import InfoHolder from "./components/InfoHolder";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
	return (
		<>
			<Header />
			<Cards />
			<InfoHolder />
		</>
	);
};

export default HomePage;
