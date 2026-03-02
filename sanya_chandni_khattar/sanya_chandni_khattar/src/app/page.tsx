"use client" //shadcn
import * as React from "react";
import Image from "next/image";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav bar */}
      <nav className="w-full border-b border-border px-4 py-3 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>navbar</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuItem>
                    <NavigationMenuLink href = "/experience">experience</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href = "/projects">projects</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href = "/connect">connect!</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Centered main content */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>

        <div className="space-y-2 mb-8">
          <p>Hi! I&apos;m Sanya.</p>
          <p>I&apos;m currently a second-semester senior studying Computer Science at the <u>University of Southern California</u>.</p>
          <p>My favorite classes have been: <span title="CSCI 353/EE 450" className="underline decoration-dotted cursor-help">Computer Networks</span>, <span title="CSCI 356" className="underline decoration-dotted cursor-help">Computer Systems</span>, and my technical elective for <span title="TAC 435" className="underline decoration-dotted cursor-help">Professional C++</span>.</p>
          <p>When I&apos;m not building through programming, you can find me making music, playing with my pets, reading, and swimming!</p>
        </div>

        <ol className="font-mono list-inside list-decimal text-sm/6 mb-10">
          <li className="mb-2 tracking-[-.01em]">
            Current working directory:{" "}
            <code className="bg-black/5 dark:bg-white/6 font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
          </li>
          <li className="tracking-[-.01em]">
            In progress by: Sanya Chandni Khattar, USC CSCI &apos;26.
          </li>
        </ol>

        {/* Responsive card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            className="bg-pastel-green p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
            href="https://drive.google.com/file/d/1uMEkzHOBtNe1tCL-suchGMDLDS0-urrY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
            Resume
            <Image aria-hidden src="/smiski.jpg" alt="Person icon" width={64} height={64} />
          </a>

          <a
            className="bg-pastel-peach p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
            href="https://github.com/sanyachkh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            GitHub
            <Image aria-hidden src="/githubsmiski.jpg" alt="Coding icon" width={64} height={64} />
          </a>

          <a
            className="bg-pastel-sky p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
            href="https://www.linkedin.com/in/sanyakhattar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Linkedin
            <Image aria-hidden src="/linkedinsmiski.jpg" alt="Several smiskis" width={64} height={64}/>
          </a>
        </div>
      </main>
    </div>
  );
}
