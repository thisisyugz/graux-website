import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { File, FileText, HelpCircle, Menu, Pencil, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import NavItem from "./nav-item";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DOCS_URL = "https://docs-graux.vercel.app"

export default function Navbar() {
	return (
		<nav className="fixed z-50 h-24 w-full border-b-2 border-b-gray-800 bg-gray-950">
			<div className="container flex h-full items-center justify-between relative">

				{/* LOGO */}
				<div className="">
					<Link href="#" className="flex items-center gap-4">
					<Image src={logo} className="w-14" alt="grauxLogo" />
					<h1 className="text-white text-2xl font-sans">Graux Labs</h1>
					</Link>
				</div>

				{/* NAV-ITEMS */}
				<div className="flex gap-4 absolute left-0 right-0 ml-auto mr-auto w-fit max-lg:hidden">
					<NavItem href={DOCS_URL}>Docs</NavItem>
					<NavItem href="#">Whitepaper</NavItem>
					<NavItem href="#">Blog</NavItem>
					<NavItem href="#">Contact Us</NavItem>
				</div>

				{/* MOBILE NAV ITEMS */}
				<div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 bg-gray-950">
              <DropdownMenuItem asChild>
                <span
                  className="tracking-wide hover:bg-gray-900 text-white font-sans"
                >
                  <FileText className="mr-2 inline h-4 w-4" />
                  <Link href={DOCS_URL}>Docs</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <span
                  className="tracking-wide hover:bg-gray-900 text-white font-sans"
                >
                  <File className="mr-2 inline h-4 w-4" />
                  <Link href="#">Whitepaper</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <span
                  className="tracking-wide hover:bg-gray-900 text-white font-sans"
                >
                  <Pencil className="mr-2 inline h-4 w-4" />
                  <Link href="#">Blog</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <span
                  className="tracking-wide hover:bg-gray-900 text-white font-sans"
                >
                  <User className="mr-2 inline h-4 w-4" />
                  <Link href="#">Contact Us</Link>
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

				{/* SOCIALS */}
				<div className="flex gap-2 max-lg:hidden">
				<Link className="block" href="#">
					<FontAwesomeIcon icon={faTwitter} className="text-white h-7 mx-2 hover:text-[#1DA1F2]" />
				</Link>
				<Link className="block" href="https://github.com/GrauxLabs" target="_blank">
					<FontAwesomeIcon icon={faGithub} className="text-white h-7 mx-2 hover:text-[#6e5494]" />
				</Link>
				<Link className="block" href="https://discord.com/invite/RnAJH24w" target="_blank">
					<FontAwesomeIcon icon={faDiscord} className="text-white h-7 mx-2 hover:text-[#5865F2]" />
				</Link>
				</div>
			</div>
		</nav>
	);
}
