"use client" //shadcn
import * as React from "react";
import Image from "next/image";
import { Home as HomeIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation-menu"

export default function Portfolio() 
{
  return (
    <div className = "min-h-svh flex flex-col text-foreground">
       {/* Nav bar */}
            <nav className="w-full border-b border-border px-4 py-3 sm:px-8">
              <div className="mx-auto max-w-5xl flex items-center justify-between">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>navbar</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuItem>
                          <NavigationMenuLink href = "/portfolio">portfolio</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href = "/connect">connect!</NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <a
                  href="/home"
                  className="rounded-lg p-2 text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
                  aria-label="Home"
                >
                  <HomeIcon size={20} />
                </a>
              </div>
            </nav>

        {/* Centered main content */}
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-8">
        <h1 className = "text-3xl font-bold mb-3">Portfolio</h1>

        <div className = "p-4 space-y-2 m-8 rounded-xl">
          <h2 className = "text-2xl font-bold mb-4">Music</h2>
          <ol className = "font-mono list-inside list-decimal text-sm/6 mb-10">
          </ol>
        </div>

        <div className = "p-4 space-y-2 m-8 rounded-xl">
          <h2 className = "text-2xl font-bold mb-4">Web Development</h2>
          <ol className = "font-mono list-inside list-decimal text-sm/6 mb-10">
          </ol>
        </div>

        <div className = "p-4 space-y-2 m-8 rounded-xl">
          <h2 className = "text-2xl font-bold mb-4">App Development</h2>
          <ol className = "font-mono list-inside list-decimal text-sm/6 mb-10">
          </ol>
        </div>
        </main>
    </div>
  );
}
