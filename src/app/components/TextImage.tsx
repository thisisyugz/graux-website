import Image from "next/image";

const Main = ({ orderFirst, orderSecond, heading, text }: any) => {
	return (
		<div className="bg-gray-500">
			<div className="mx-10 grid grid-cols-2 gap-5 pt-10">
				{text}
				<div className={`col-2 bg-green-400 ${orderSecond}`}></div>
			</div>
		</div>
	);
};

export default Main;
