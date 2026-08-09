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
        
export default function Home() 
{
  return (
    <div className="min-h-svh flex flex-col">
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
                    <NavigationMenuLink href = "/connect">connect</NavigationMenuLink>
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
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-8 text-foreground">
        <h1 className="text-3xl font-bold mb-3">Sanya Chandni Khattar</h1>
        <h2 className="text-lg font-semibold mb-6 text-pretty text-foreground/80 sm:text-xl lg:text-2xl">A problem-solver and artist driven by human-centric approaches to engineering.</h2>

        <div className="blurb space-y-3 mb-8 text-sm text-pretty text-foreground/88 sm:text-base sm:mb-10">
          <p>Hi! I&apos;m Sanya, a second-semester senior studying <u>Computer Science</u> at the University of Southern California.</p>
          <p>I really enjoyed courses at the intersection of hardware and software: Computer Networks{" "}<span className="text-foreground/50">(CSCI 353/EE 450)</span>, Computer Systems{" "}<span className="text-foreground/50">(CSCI 356)</span>, and Professional C++<span className="text-foreground/50">(TAC/ITP 435)</span>.
          </p>

          <p>When I&apos;m not building, I create music, take care of my pets, read, or go outdoors!</p>
        </div>

        {/* Responsive card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            className="group border border-white/10 bg-white/5 backdrop-blur-xl p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
            href = "/resume"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} className="shrink-0"/>
            Resume [Web]
            <Image aria-hidden src="/smiski.jpg" alt="Person icon" width={64} height={64} className = "ml-auto size-12 shrink-0 rounded-lg object-cover sm:size-16"/>
          </a>

          <a
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:opacity-80 transition-opacity"
            href="https://github.com/sanyachkh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} className = "shrink-0"/>
            GitHub
            <Image aria-hidden src="/githubsmiski.jpg" alt="Coding icon" width={64} height={64} className = "ml-auto size-12 shrink-0 rounded-lg object-cover sm:size-16"/>
          </a>

          <a
            className="group border border-white/10 bg-white/5 backdrop-blur-xl p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
            href="https://www.linkedin.com/in/sanyakhattar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} className = "shrink-0"/>
            Linkedin
            <Image aria-hidden src="/linkedinsmiski.jpg" alt="Several smiskis" width={64} height={64} className = "ml-auto size-12 shrink-0 rounded-lg object-cover sm:size-16"/>
          </a>

          <a
            className="group border border-white/10 bg-white/5 backdrop-blur-xl p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
            href = "https://drive.google.com/file/d/1WfVluXDfzIx0eB_53rCLxDUo9G4s4CVj/view?usp=sharing"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} className = "shrink-0"/>
            Resume [PDF]
            <Image aria-hidden src="/smiski.jpg" alt="Person icon" width={64} height={64} className = "ml-auto size-12 shrink-0 rounded-lg object-cover sm:size-16"/>
          </a>
        </div>
      </main>
    </div>
  );
}
