import Image from "next/image";
import nodes from "../../../public/nodes.jpg";
import Info from "../components/Info";

const Main = ({ heading, text }: any) => {
	return (
		<>
			<div className="container mx-auto flex w-5/6">
				<div className="m-10">
					<h3 className="text-2xl font-semibold text-white">{heading}</h3>
					<br />
					<p className="text-lg text-white">{text}</p>
				</div>
				<Image src={nodes} alt="nodes" className="m-10 me-10 w-5/12"></Image>
				<hr className="" />
			</div>
		</>
	);
};

export default Main;
