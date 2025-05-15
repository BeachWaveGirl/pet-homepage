
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";

const ProductNavigationMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Memorial Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
              {memorialItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/50 to-white p-4 no-underline outline-none focus:shadow-md hover:bg-slate-50"
                >
                  <div className="mb-2 text-lg font-medium">
                    {item.title}
                  </div>
                  <p className="text-sm leading-tight text-gray-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/" className="block py-2 px-3">
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/how-it-works" className="block py-2 px-3">
            How It Works
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/pricing" className="block py-2 px-3">
            Pricing
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const memorialItems = [
  {
    title: "Star Map Letter",
    href: "/",
    description:
      "A personalized letter from your pet with a star map showing the night sky when they became a star.",
  },
  {
    title: "Pet Poems",
    href: "/pet-poems",
    description:
      "Beautiful, custom poems that capture the unique bond you shared with your beloved pet.",
  },
  {
    title: "Custom Pet Portrait",
    href: "/pet-portrait",
    description: 
      "Beautiful digital watercolor or artistic portraits of your pet to cherish and remember them.",
  },
  {
    title: "Memory Stories",
    href: "/memory-stories",
    description:
      "Heartwarming stories from your pet's perspective, highlighting their favorite memories with you.",
  },
  {
    title: "Digital Candles",
    href: "/digital-candles",
    description:
      "Virtual memorial candles that you can light digitally to remember your pet.",
  },
  {
    title: "Grief Journal",
    href: "/grief-journal",
    description:
      "Daily affirmations and journal prompts to help navigate the journey of pet loss.",
  },
];

export default ProductNavigationMenu;
