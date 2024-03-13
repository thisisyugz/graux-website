import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

const inter = Inter({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
});

export const metadata: Metadata = {
	title: "Graux",
	description: "Complete Decentralization for Web3 Automation & dApps",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
			<body className={inter.className}>
				<Navbar />
				{/* {children} */}
				{/* <Footer /> */}
			</body>
		</html>
	);
}
