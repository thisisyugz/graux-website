import Link from "next/link";

const Box = ({ title, content }: any) => {
	return (
		<div className="mx-8 h-40 w-1/3 rounded bg-gray-700 text-center">
			<h3 className="mt-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-xl font-bold tracking-wide text-transparent">{title}</h3>
			<p className="mt-3 block px-4 text-base font-normal leading-tight text-white">{content}</p>
		</div>
	);
};

export default Box;
