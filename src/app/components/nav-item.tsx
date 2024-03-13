import Link from "next/link";
import { Button } from "./ui/button";

export default function NavItem({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Button asChild variant="navItem" className="text-lg font-sans">
      <Link
        href={href}
      >
        {children}
      </Link>
    </Button>
  );
}