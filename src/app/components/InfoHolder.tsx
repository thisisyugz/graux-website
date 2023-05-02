import Image from "next/image";
import nodes from "../../../public/nodes.jpg";
import Info from "../components/Info";

const InfoHolder = () => {
	return (
		<>
			<div className="bg-black">
				<h1 className="pt-10 text-center text-4xl text-white">Build, visualize, automate tasks</h1>
				<p className="mt-5 text-center text-lg text-white">
					The GraphLinq Engine provides you all the needs for handling business logic without requiring any coding skills.
				</p>
				<Info
					heading="Heading 1"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi dignissimos inventore quae, repudiandae alias quisquam ipsam quaerat vero minus! Adipisci, ipsa delectus magnam saepe a maiores expedita aliquam blanditiis!"
				/>
				<Info
					heading="Heading 2"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi dignissimos inventore quae, repudiandae alias quisquam ipsam quaerat vero minus! Adipisci, ipsa delectus magnam saepe a maiores expedita aliquam blanditiis!"
				/>
				<Info
					heading="Heading 3"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi dignissimos inventore quae, repudiandae alias quisquam ipsam quaerat vero minus! Adipisci, ipsa delectus magnam saepe a maiores expedita aliquam blanditiis!"
				/>
				<Info
					heading="Heading 4"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi dignissimos inventore quae, repudiandae alias quisquam ipsam quaerat vero minus! Adipisci, ipsa delectus magnam saepe a maiores expedita aliquam blanditiis!"
				/>
			</div>
		</>
	);
};

export default InfoHolder;
