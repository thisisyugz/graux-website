import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Graux",
	description: "<Add Graux Description>",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="favicon.png" />
			</head>
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
