"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function Navbar() {
    return (
        <NavigationMenu className="absolute text-2xl px-2 w-screen">
            <NavigationMenuList className="w-screen justify-between ">
                <NavigationMenuItem>
                    <p>CS2 Strat Roulette</p>
                </NavigationMenuItem>
                <div className="flex items-center space-x-2">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/admin">
                                Admin
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/submitStrat">
                                Submit Strat
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/about">
                                About
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <div className="h-6 w-0.5 bg-slate-300 " />

                    <NavigationMenuItem>
                        <p>Hi Username!</p>
                    </NavigationMenuItem>

                    {/* AVATAR SIGN IN DROPDOWN THING */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="w-full">  
                        <svg 
                          data-testid="geist-icon" 
                          height="20" 
                          width="20"
                          viewBox="0 0 16 16" 
                          className="m-2"
                        >
                          <path 
                            d="M7.75 0C5.95507 0 4.5 1.45507 4.5 3.25V3.75C4.5 5.54493 5.95507 7 7.75 7H8.25C10.0449 7 11.5 5.54493 11.5 3.75V3.25C11.5 1.45507 10.0449 0 8.25 0H7.75ZM6 3.25C6 2.2835 6.7835 1.5 7.75 1.5H8.25C9.2165 1.5 10 2.2835 10 3.25V3.75C10 4.7165 9.2165 5.5 8.25 5.5H7.75C6.7835 5.5 6 4.7165 6 3.75V3.25ZM2.5 14.5V13.1709C3.31958 11.5377 4.99308 10.5 6.82945 10.5H9.17055C11.0069 10.5 12.6804 11.5377 13.5 13.1709V14.5H2.5ZM6.82945 9C4.35483 9 2.10604 10.4388 1.06903 12.6857L1 12.8353V13V15.25V16H1.75H14.25H15V15.25V13V12.8353L14.931 12.6857C13.894 10.4388 11.6452 9 9.17055 9H6.82945Z" 
                            fill="currentColor"
                          />  
                        </svg>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-full"> {/* Conditionally render the below items based on auth state */}
                        <NavigationMenuLink asChild className="w-full">
                          <Link href="/login">
                            Your account
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className="w-full">
                          <Link href="/signup" className="w-full">
                            Sign up
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className="w-full">
                          <Link href="/login">
                            Log in
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className="w-full">
                          <Link href="/login">
                            Log out
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
