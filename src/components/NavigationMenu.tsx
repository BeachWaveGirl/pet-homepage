
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

// Define and export the category groups for use in other components
export const categoryGroups = [
  {
    id: "personality-destiny",
    emoji: "🧿",
    title: "Pet Personality & Destiny",
    description: "Fun, mystical, and personalized content based on your pet's spirit.",
    items: [
      {
        title: "Pet Spirit Connection Chat",
        href: "/pet-physic-reading",
        description: "Connect with your pet on a deeper spiritual level.",
      },
      {
        title: "Pet Voice Chat",
        href: "/pet-voice-chat",
        description: "Talk with your pet using our AI voice technology.",
      },
      {
        title: "Pet Tarot Reading",
        href: "/pet-tarot-reading",
        description: "Discover what the cards reveal about your pet's energy.",
      },
    ],
  },
  {
    id: "memorial-afterlife",
    emoji: "🌈",
    title: "Pet Memorial & Afterlife",
    description: "Tributes and mementos for pets who've crossed the Rainbow Bridge.",
    items: [
      {
        title: "Custom Pet Star Map",
        href: "/star-map",
        description: "A personalized star map showing when your pet became a star.",
      },
      {
        title: "Rainbow Bridge Poem Print",
        href: "/rainbow-bridge",
        description: "Beautiful customized Rainbow Bridge poems to honor your pet's memory.",
      },
      {
        title: "Pet Funeral Announcement Card",
        href: "/pet-funeral",
        description: "Create a mobile funeral invitation to share with loved ones.",
      },
    ],
  },
];

const ProductNavigationMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-900 hover:text-gray-600">Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-1 gap-3 p-6 md:w-[600px] lg:w-[700px] absolute left-1/2 transform -translate-x-1/2 top-0 bg-white shadow-lg rounded-md">
              {categoryGroups.map((group) => (
                <div key={group.id} className="mb-6">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <span className="mr-2">{group.emoji}</span>
                    <span>{group.title}</span>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex flex-col p-3 rounded-md bg-gradient-to-b from-white/50 to-white hover:bg-gray-50 border border-gray-100 shadow-sm"
                      >
                        <div className="font-medium">{item.title}</div>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/pricing" className="block py-2 px-3 text-gray-900 hover:text-gray-600">
            Pricing
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ProductNavigationMenu;
