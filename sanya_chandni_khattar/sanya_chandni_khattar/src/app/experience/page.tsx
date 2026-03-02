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
} from "@/components/ui/navigation-menu"

export default function Experience() {
  return (
    <div className = "min-h-screen flex flex-col">
       {/* Nav bar */}
            <nav className="w-full border-b border-border px-4 py-3 sm:px-8">
              <div className="mx-auto max-w-5xl flex items-center justify-between">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>navbar</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuItem>
                          <NavigationMenuLink href = "/experience">experience</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href = "/connect">connect!</NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <a
                  href="/"
                  className="rounded-lg p-2 text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
                  aria-label="Home"
                >
                  <HomeIcon size={20} />
                </a>
              </div>
            </nav>

        {/* Centered main content */}
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-8">
        <h1 className = "text-3xl font-bold mb-4">Experience</h1>

        <div className = "bg-amber-200 p-4 space-y-2 m-8 rounded-xl">
          <h2 className = "text-2xl font-bold mb-4">Industry Experience</h2>
          <ol className = "font-mono list-inside list-decimal text-sm/6 mb-10">
            <li>R&D Intern @ Meyer Sound Laboratories Incorporated</li>
            <li>IT Intern @ Meyer Sound Laboratories Incorporated</li>
            <li>Fullstack Developer, Undergrad Research Assistant @ USC Interaction Lab</li>
          </ol>
        </div>

        <div className = "bg-amber-300 p-4 space-y-2 m-8 rounded-xl">
          <h2 className = "text-2xl font-bold mb-4">Customer Service Experience</h2>
          <ol className = "font-mono list-inside list-decimal text-sm/6 mb-10">
            <li>Barista @ Nordstrom eBar</li>
          </ol>
        </div>

        <div className = "bg-amber-400 p-4 space-y-2 m-8 rounded-xl">
          <h2 className = "text-2xl font-bold mb-4">Leadership</h2>
          <ol className = "font-mono list-inside list-decimal text-sm/6 mb-10">
            <li>Software Engineering Capstone Team Lead</li>
            <li>HackSC Hacker Experience Team Lead</li>
          </ol>
        </div>
        </main>
    </div>
  );
}
