import Fragment from "react";

const InfoBlock = ({ orderFirst, orderSecond }: any) => {
	return (
		<div className="bg-gray-500">
			<div className="mx-10 grid grid-cols-2 gap-5 pt-10">
				<div className={`col-1 bg-red-600 ${orderFirst} h-80`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis
					gravida neque convallis a cras semper. Velit sed ullamcorper morbi tincidunt ornare massa eget. Ut ornare lectus sit amet est. Magna ac
					placerat vestibulum lectus mauris ultrices eros in cursus. Magna fringilla urna porttitor rhoncus dolor purus non enim. Egestas pretium
					aenean pharetra magna ac placerat vestibulum lectus mauris. Sed libero enim sed faucibus turpis in eu mi. Orci ac auctor augue mauris.
					Tortor condimentum lacinia quis vel eros. Tincidunt ornare massa eget egestas. Tellus integer feugiat scelerisque varius morbi. Eu sem
					integer vitae justo eget magna fermentum iaculis eu.
				</div>
				<div className={`col-2 bg-green-400 ${orderSecond}`}>Image Block</div>
			</div>
		</div>
	);
};

export default InfoBlock;
