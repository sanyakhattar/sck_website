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

export default function Connect() {
  return (
    <div className = "min-h-screen flex flex-col">
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
        <main className = "mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-8">
            <h1 className = "text-3xl font-bold mb-4">Connect</h1>

            <div className = "space-y-4 mb-8">
                <p><a>LinkedIn</a></p>
                <p><a>School Email</a></p>
                <p><a>Work/Personal Email</a></p>
                <p><a>Calendly</a></p>
            </div>
        
        </main>   
    </div>
  );
}


