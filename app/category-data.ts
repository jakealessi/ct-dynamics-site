export type Category = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  intro: string;
  overview: string[];
  considerations: string[];
};

export const categories: Category[] = [
  {
    slug: "beauty-and-personal-care",
    name: "Beauty & Personal Care",
    image: "/media/category-beauty.png",
    imageAlt: "Beauty and personal care products",
    intro:
      "Beauty, grooming, and personal care products for wholesale, retail, and online channels.",
    overview: [
      "We help beauty and personal care brands find retail, wholesale, and online buyers.",
      "If you’re buying for a business, tell us which products you need. We’ll discuss what’s available, how much you’d like to order, and when you need delivery.",
    ],
    considerations: [
      "Who the products are for",
      "Where you want to sell",
      "Stock availability",
    ],
  },
  {
    slug: "home-craft-and-households",
    name: "Craft & Household",
    image: "/media/category-home-craft.png",
    imageAlt: "Craft and household products on a work table",
    intro:
      "Craft supplies and household goods, from creative projects to everyday tasks.",
    overview: [
      "Planning a seasonal range or adding everyday household goods? We help buyers source products around their customers, quantities, and timing.",
      "We also work with craft and household brands that want help finding new places to sell.",
    ],
    considerations: [
      "Products you’re looking for",
      "Seasonal buying plans",
      "Order quantities",
    ],
  },
  {
    slug: "home-and-kitchen",
    name: "Home & Kitchen",
    image: "/media/category-home-kitchen.png",
    imageAlt: "Kitchen tools and utensils",
    intro: "Home essentials, kitchen tools, and products made for daily use.",
    overview: [
      "We work with home and kitchen brands looking to sell through stores, wholesalers, and online businesses.",
      "For buyers, we help find products to add to your range and work through stock and order details with you.",
    ],
    considerations: [
      "Your product range",
      "Where you buy or sell",
      "Reorder needs",
    ],
  },
  {
    slug: "health-and-household",
    name: "Health & Household",
    image: "/media/category-health-household.png",
    imageAlt: "Health, hygiene, and household essentials",
    intro: "Health, hygiene, and household essentials for everyday needs.",
    overview: [
      "We help brands find buyers for health, hygiene, and household products.",
      "If you need stock for your business, we’ll discuss which products you buy, how often you order, and the quantities you need.",
    ],
    considerations: [
      "Product requirements",
      "Order frequency",
      "Stock availability",
    ],
  },
  {
    slug: "sports-and-outdoors",
    name: "Sports & Outdoors",
    image: "/media/category-sports-outdoors.png",
    imageAlt: "Outdoor and recreational equipment",
    intro: "Equipment and accessories for sport, recreation, and the outdoors.",
    overview: [
      "Selling sports equipment or outdoor accessories? We help you explore wholesale, retail, and online opportunities for your products.",
      "We also help buyers source stock and plan orders around the season, so timing is part of the conversation from the start.",
    ],
    considerations: [
      "Seasonal buying plans",
      "Your customers",
      "Available stock",
    ],
  },
  {
    slug: "toys-and-games",
    name: "Toys & Games",
    image: "/media/category-toys-games.png",
    imageAlt: "Toys and wooden games",
    intro: "Toys and games for children and families.",
    overview: [
      "We help toy and game brands find stores, wholesalers, and online buyers for their products.",
      "Looking for stock? Tell us who you buy for and when you need it, whether you’re planning for the holidays or adding to your regular range.",
    ],
    considerations: [
      "Who you’re buying for",
      "Holiday and seasonal orders",
      "Delivery dates",
    ],
  },
  {
    slug: "electronics",
    name: "Electronics",
    image: "/media/category-electronics.png",
    imageAlt: "Consumer electronics and accessories",
    intro:
      "Consumer electronics and accessories for retail, wholesale, and online businesses.",
    overview: [
      "We work with electronics and accessory brands that want to reach more wholesale, retail, and online buyers.",
      "If you’re sourcing products, share what you’re looking for and the quantities you need. We’ll help look for suppliers and discuss availability.",
    ],
    considerations: [
      "Product specifications",
      "Order quantities",
      "Stock and delivery",
    ],
  },
  {
    slug: "pet",
    name: "Pet",
    image: "/media/category-pet.png",
    imageAlt: "Pet care products",
    intro: "Products for everyday pet care, comfort, and play.",
    overview: [
      "We help pet product brands find buyers in stores, wholesale, and online.",
      "For businesses buying pet products, we help with sourcing and order coordination, including stock you need to reorder regularly.",
    ],
    considerations: [
      "Your product range",
      "Reorder frequency",
      "Stock availability",
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    image: "/media/category-automotive.png",
    imageAlt: "Automotive care products and accessories",
    intro: "Automotive care, accessories, and tools made for drivers.",
    overview: [
      "We help automotive care and accessory brands find new places to sell their products.",
      "If you’re buying for your business, tell us which products your customers need. We’ll help explore suppliers and work through the order details.",
    ],
    considerations: [
      "Product requirements",
      "Your customers",
      "Delivery needs",
    ],
  },
];

export const legacyCategorySlugs = [
  "beauty-and-personal-care",
  "home-craft-and-households",
  "home-and-kitchen",
  "health-and-household",
  "sports-and-outdoors",
  "toys-and-games",
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
