
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
        title: "Pet Horoscope",
        href: "/pet-physic-reading",
        description: "Discover what the stars have in store for your pet.",
      },
      {
        title: "Pet Tarot Reading",
        href: "/pet-physic-reading",
        description: "Connect with your pet on a deeper spiritual level.",
      },
      {
        title: "Pet Zodiac Portrait",
        href: "/pet-zodiac",
        description: "Mystical astrological portraits with your pet's zodiac sign.",
      },
    ],
  },
  {
    id: "love-communication",
    emoji: "💌",
    title: "Pet Love & Communication",
    description: "Emotional expression between you and your pet.",
    items: [
      {
        title: "Whisper Pet Letters",
        href: "/pet-poems",
        description: "Beautiful custom poems capturing your bond with your pet.",
      },
      {
        title: "Pet Love Certificate",
        href: "/pet-typography",
        description: "Elegant calligraphy featuring your pet's name with decorative elements.",
      },
      {
        title: "Pet Typography Portrait",
        href: "/pet-typography",
        description: "Artistic typography designs celebrating your pet.",
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
        title: "Pet Star Map",
        href: "/star-map",
        description: "A personalized star map showing when your pet became a star.",
      },
      {
        title: "Rainbow Bridge Poem",
        href: "/rainbow-bridge",
        description: "Beautiful customized Rainbow Bridge poems to honor your pet's memory.",
      },
      {
        title: "Digital Memory Scrapbook",
        href: "/digital-scrapbooks",
        description: "Digital memory books featuring photo collages and loving captions.",
      },
    ],
  },
  {
    id: "life-responsibility",
    emoji: "📝",
    title: "Pet Life & Responsibility",
    description: "Useful documents for managing real-life pet care.",
    items: [
      {
        title: "Pet Health Record",
        href: "/pet-health-record",
        description: "Organized digital health records for your pet's medical history.",
      },
      {
        title: "Pet Sitting Service Agreement",
        href: "/pet-sitting-service",
        description: "Professional agreements and forms for pet sitting services.",
      },
      {
        title: "Pet Care Calendar",
        href: "/pet-record",
        description: "Complete pet information and care tracking system.",
      },
    ],
  },
  {
    id: "portraits-artwork",
    emoji: "🎨",
    title: "Pet Portraits & Artwork",
    description: "Beautiful visual representations of your beloved companions.",
    items: [
      {
        title: "Custom Pet Portrait",
        href: "/pet-portrait",
        description: "Beautiful digital watercolor or artistic portraits of your pet.",
      },
      {
        title: "Badly Drawn Pet Portrait",
        href: "/pet-badly-drawn",
        description: "Cute doodle style one-line drawings with a playful touch.",
      },
      {
        title: "Pet Digital Art",
        href: "/pet-digital-art",
        description: "Vibrant digital art prints capturing your pet's personality.",
      },
    ],
  },
  {
    id: "celebrations-fun",
    emoji: "🎁",
    title: "Pet Celebrations & Fun Prints",
    description: "Printable items for lighthearted moments and gifting.",
    items: [
      {
        title: "Pet Party Invitation",
        href: "/pet-party",
        description: "Cute and fun digital pet party invitations for celebrations.",
      },
      {
        title: "Pet Birthday Certificate",
        href: "/pet-party",
        description: "Special certificates to commemorate your pet's birthday.",
      },
      {
        title: "Pet Achievement Awards",
        href: "/pet-typography",
        description: "Fun certificates celebrating your pet's special talents.",
      },
    ],
  },
  {
    id: "home-decor",
    emoji: "🐾",
    title: "Pet Home & Decor",
    description: "Design pieces for your pet's presence in your space.",
    items: [
      {
        title: "Pet Bathroom Sign",
        href: "/pet-bathroom",
        description: "Hilarious customized bathroom signs featuring your pet.",
      },
      {
        title: "Quote Posters",
        href: "/quote-posters",
        description: "Motivational and comforting pet quotes with illustrations.",
      },
      {
        title: "Pet Room Door Sign",
        href: "/pet-bathroom",
        description: "Custom door signs for your pet's special space.",
      },
    ],
  },
  {
    id: "stories-journals",
    emoji: "📔",
    title: "Pet Stories & Journals",
    description: "Document and share your pet's journey.",
    items: [
      {
        title: "Memory Stories",
        href: "/memory-stories",
        description: "Heartwarming stories from your pet's perspective.",
      },
      {
        title: "Grief Journal",
        href: "/grief-journal",
        description: "Daily affirmations and prompts to help navigate pet loss.",
      },
      {
        title: "Pet Adventure Log",
        href: "/pet-record",
        description: "Track and record your pet's adventures and milestones.",
      },
    ],
  },
];

const ProductNavigationMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-1 gap-3 p-6 md:w-[800px] lg:w-[900px] absolute left-1/2 transform -translate-x-1/2 top-0 bg-white shadow-lg rounded-md">
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
                        className="flex flex-col p-3 rounded-md bg-gradient-to-b from-white/50 to-white hover:bg-slate-50 border border-gray-100 shadow-sm"
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
          <Link to="/pricing" className="block py-2 px-3">
            Pricing
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ProductNavigationMenu;
