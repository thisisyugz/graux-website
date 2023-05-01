const Button = ({ text }: any) => {
	return (
		<button className="rounded-full bg-gradient-to-r from-grauxPurple to-grauxPink px-5 py-2 font-semibold text-white hover:from-purple-700 hover:to-pink-500">
			{text}
		</button>
	);
};

export default Button;
