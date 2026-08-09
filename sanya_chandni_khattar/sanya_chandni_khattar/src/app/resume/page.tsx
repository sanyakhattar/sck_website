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

export default function Connect() {
  return (
    <div className = "flex flex-col text-white">
        {/* Nav bar */}
              <nav className="w-full border-b px-4 py-3 sm:px-8">
                <div className="mx-auto max-w-5xl flex items-center justify-between">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>navbar</NavigationMenuTrigger>
                        <NavigationMenuContent>

                          <NavigationMenuItem>
                            <NavigationMenuLink href = "/">home</NavigationMenuLink>
                          </NavigationMenuItem>

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
        <main className = "mx-auto flex-1 px-4 py-10 sm:px-8">
            <h1 className = "text-4xl font-bold mb-4">Resume</h1>

            <div className = "experience text-3xl font-semibold mb-4">Experience</div>

            <div className = "experience-container">
                <div className = "chrono-experience text-2xl">Rolling Robots Incorporated</div>
                    <div className = "exp-time text-1xl">June 2026 - July 2026</div>
                    <div className = "role(s)">
                        <ol className = "list-inside list-decimal text-l/6 mb-6">
                            <li>Lead STEM Instructor for Summer Camps</li>
                        </ol>
                    </div>
            </div>

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
                <div className = "exp-time text-1xl">May 2024 - December 2024</div>
                <div className = "role(s)">
                    <ol className = "list-inside list-decimal text-l/6 mb-6">
                        <li>Information Systems and Technology Intern</li>
                        <li>Research and Development (R&D) Intern</li>
                    </ol>
                </div>
            </div>

            <div className = "projects text-3xl font-semibold mb-4">Projects</div>

            <div className = "project-container mb-4">
              <div className = "project-1 text-2xl">Team Lead, Software Engineering Capstone (USC CSCI 401)</div>
              <div className = "exp-time text-1xl">January 2026 - May 2026</div>
              <div className = "description text-1xl">
                I've always enjoyed taking a high-level, overhead approach to technical projects, and my Software Capstone course (CSCI 401)
                at USC was no different. Throughout the course, we completed end-to-end features for a stakeholder's existing iOS application, 
                and I oversaw communication between the student team and the stakeholder, from documentation to deliverables.
              </div>
            </div>

            <div className = "project-container mb-4">
              <div className = "project-2 text-2xl">Founding Engineer and CTO, Wevae</div>
              <div className = "exp-time text-1xl">October 2025 - January 2026</div>
               <div className = "description text-1xl">
                  As the sole engineer and CTO of Wevae, I bridged the gaps between technical execution and business vision for Wevae.
                  Wevae was designed for young adults to stay connected with their friends through life transitions and physical location changes
                  via social networking and circles personalized to where you are, whenever.
                </div>
            </div>


            <div className = "project-container mb-4">
              <div className = "project-3 text-2xl">Aura, a Music Therapist Chatbot</div>
                <div className = "project-time text-1xl">June 2023 - July 2023</div>
                <div className = "description text-1xl">
                  Prompt engineered and deployed a music therapist chatbot on poe.com with GPT-3 through numerous phases of prompt refinery.
                  Designed with the intent to normalize mental health conversations, and decrease logistical + socioeconomic barriers to support.
                </div>
            </div>
            
        </main>   
    </div>
  );
}


