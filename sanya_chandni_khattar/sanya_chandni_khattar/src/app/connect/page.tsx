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
            <h1 className = "text-3xl font-bold mb-4">Connect!</h1>

             {/* Responsive card grid */}
                    <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <a
                        className="bg-pastel-lavender p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
                        href="mailto:sanyakhattar7@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Main Email
                      </a>
            
                      <a
                        className="bg-pastel-yellow p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
                        href="mailto:sckhatta@usc.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Academic Email
                      </a>
            
                      <a
                        className="bg-pastel-pink p-5 rounded-xl flex items-center gap-3 hover:opacity-80 transition-opacity"
                        href="https://github.com/sanyakhattar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Personal GitHub (Work In Progress)
                      </a>
                    </div>
        
        </main>   
    </div>
  );
}


