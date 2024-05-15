"use client";

import * as React from "react";
import { Menu, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

const links = [
  { href: "/", label: "All platforms" },
  { href: "/", label: "For Agencies" },
  { href: "/", label: "Resources" },
  { href: "/", label: "Partners" },
  { href: "/", label: "Pricing" },
];

export function MobileNav() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="" size="sm" variant="ghost">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          {/* <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader> */}
          <div className="p-4 pb-0">
            <div className="w-full flex flex-col justify-center">
              {links.map((link) => (
                <Link key={link.label} href={link.href}>
                  <Button
                    variant="link"
                    className="font-normal w-full border-1 border-black/100 text-center text-md tracking-wide"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <Button className="rounded-full font-normal" variant="outline">
              Sign in
            </Button>
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
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
