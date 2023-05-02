import Card from "../components/Card";

const Cards = () => {
	return (
		<>
			<div className="bg-gray-900 py-10">
				<div className="cards container mx-auto h-96 w-11/12 px-5 align-top md:flex">
					<Card
						title="Create powerful crypto-tools"
						content="Use pre-made templates or over 180 logical blocks by simply dragging & dropping to create the equivalent of hundreds of lines of code in minutes."
					/>
					<Card
						title="For a fraction of a penny"
						content="Operations on GraphLinq only charge GLQ as gas based on nodes executed, thus making it extremely cheap to run a graph on our IDE."
					/>
					<Card
						title="Execute Your Graph"
						content="Automate actions like creating trade orders, sending a mail, creating a token or nft, alerting over social media or mobile and much more."
					/>
				</div>
			</div>
		</>
	);
};

export default Cards;
