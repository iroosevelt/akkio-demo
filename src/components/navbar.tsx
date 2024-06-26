import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "./transitions";
import { MobileNav } from "./mobile-nav";

export async function Navbar() {
  const links = [
    { href: "/", label: "All platforms" },
    { href: "/", label: "For Agencies" },
    { href: "/", label: "Resources" },
    { href: "/", label: "Partners" },
    { href: "/", label: "Pricing" },
  ];

  return (
    <nav className="fixed w-[100%] z-50 bg-white/80 bg-opacity-80 backdrop-blur-md inset-0 h-[10vh] lg:h-[10vh] flex items-center border-b border-solid border-black/5">
      <div className="w-full px-5 md:max-w-5xl m-auto flex items-center">
        <aside className="md:w-[250px]">
          <Link href="/">
            <Image
              priority
              src="/logo.svg"
              alt="Akkio"
              width={90}
              height={90}
              // layout="responsive"
              // className="hidden m:flex"
            />
          </Link>
        </aside>
        <div className="flex lg:hidden ml-auto">
          <MobileNav />
        </div>
        <div className="hidden lg:flex capitalize flex-1 items-center justify-center gap-x-8 w-full rounded-full">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-light text-sm tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <aside className="hidden lg:flex md:w-[250px] justify-end items-center ml-auto gap-x-5">
          <Button variant="link">Sign in</Button>
          <Button
            variant="primary"
            className="rounded-full font-no"
            style={{
              boxShadow: "0px 1px 10px rgba(197, 253, 44, 0.5)",
            }}
            size="lg"
          >
            Try Akkio
          </Button>
        </aside>
      </div>
    </nav>
  );
}
