
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
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-3 gap-3 p-4 md:w-[600px] lg:w-[800px]">
              {categoryItems.map((item) => (
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
          <Link to="/pricing" className="block py-2 px-3">
            Pricing
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const categoryItems = [
  {
    title: "Pet Portrait",
    href: "/pet-portrait",
    description:
      "Beautiful digital watercolor or artistic portraits of your pet to cherish and remember them.",
  },
  {
    title: "Badly Drawn Pet Portrait",
    href: "/pet-badly-drawn",
    description:
      "Cute doodle style one-line drawings of your pet with a whimsical, playful touch.",
  },
  {
    title: "Pet Health Record",
    href: "/pet-health-record",
    description:
      "Organized digital health records for your pet's medical history, vaccinations and appointments.",
  },
  {
    title: "Pet Record",
    href: "/pet-record",
    description:
      "Pet Tracker, Pet Information, Vaccination and complete health records for your furry friend.",
  },
  {
    title: "Star Map Letter",
    href: "/star-map",
    description:
      "A personalized letter with a star map showing the night sky when your pet became a star.",
  },
  {
    title: "Pet Poems",
    href: "/pet-poems",
    description:
      "Beautiful, custom poems that capture the unique bond you shared with your beloved pet.",
  },
  {
    title: "Memory Stories",
    href: "/memory-stories",
    description:
      "Heartwarming stories from your pet's perspective, highlighting their favorite memories with you.",
  },
  {
    title: "Digital Scrapbooks",
    href: "/digital-scrapbooks",
    description:
      "Digital memory books featuring collages of photos and loving captions celebrating your pet's life.",
  },
  {
    title: "Pet Digital Art",
    href: "/pet-digital-art",
    description:
      "Vibrant digital art prints and illustrations capturing your pet's unique personality and spirit.",
  },
  {
    title: "Pet Physic Reading",
    href: "/pet-physic-reading",
    description:
      "Connect with your pet on a deeper level through personalized spiritual readings and insights.",
  },
  {
    title: "Pet Zodiac Portraits",
    href: "/pet-zodiac",
    description:
      "Mystical astrological portraits incorporating your pet's zodiac sign, constellations, and cosmic elements.",
  },
  {
    title: "Rainbow Bridge Poem",
    href: "/rainbow-bridge",
    description:
      "Beautiful customized Rainbow Bridge poems to honor your beloved pet's memory.",
  },
  {
    title: "Grief Journal",
    href: "/grief-journal",
    description:
      "Daily affirmations and journal prompts to help navigate the journey of pet loss.",
  },
  {
    title: "Pet Bathroom",
    href: "/pet-bathroom",
    description:
      "Hilarious customized bathroom signs featuring your pet wrapped in a towel with clever bathroom humor.",
  },
  {
    title: "Pet Typography",
    href: "/pet-typography",
    description:
      "Elegant calligraphy featuring your pet's name with decorative elements perfect for framing.",
  },
  {
    title: "Quote Posters",
    href: "/quote-posters",
    description:
      "Motivational and comforting pet quotes paired with simple illustrations for healing and remembrance.",
  },
  {
    title: "Pet Party Invitation",
    href: "/pet-party",
    description:
      "Cute and fun digital pet party invitations for birthdays, adoptaversaries, and special celebrations.",
  },
  {
    title: "Pet Funeral Mobile",
    href: "/pet-funeral",
    description:
      "Mobile-friendly memorial invitations to celebrate your pet's life with friends and family.",
  },
];

export default ProductNavigationMenu;
