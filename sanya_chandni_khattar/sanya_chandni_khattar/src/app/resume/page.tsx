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

export default function Connect() {
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
        <main className = "mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-8">
            <h1 className = "text-4xl font-bold mb-4">Resume</h1>

            <div className = "experience text-3xl font-semibold mb-4">Experience</div>

            <div className = "experience-container">
                <div className = "chrono-experience text-2xl">USC Interaction Lab</div>
                    <div className = "exp-time text-1xl">August 2024 - December 2025</div>
                    <div className = "role(s)">
                        <ol className = "list-inside list-decimal text-l/6 mb-6">
                            <li>Full-stack Software Developer | May 2025 - August 2025</li>
                            <li>Undergraduate Research Assistant, USC CURVE Fellowship | Aug. 2024 - May 2025</li>
                        </ol>
                    </div>
            </div>

            <div className = "experience-container">
            <div className = "chrono-experience text-2xl">Meyer Sound Laboratories, Incorporated</div>
                <div className = "exp-time text-1xl">May - December 2024</div>
                <div className = "role(s)">
                    <ol className = "list-inside list-decimal text-l/6 mb-6">
                        <li>Information Systems and Technology Intern</li>
                        <li>Research and Development (R&D) Intern</li>
                    </ol>
                </div>
            </div>

            <div className = "projects text-3xl font-semibold mb-4">Projects</div>
            
        </main>   
    </div>
  );
}


