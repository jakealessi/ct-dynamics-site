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
      "Distribution support for beauty, grooming, and personal care brands ready to reach more of the right customers.",
    overview: [
      "Beauty and personal care products compete in a category where presentation, availability, and channel fit all shape performance.",
      "CT Dynamics helps brands connect market opportunity with the sourcing and fulfillment coordination needed to support consistent growth.",
    ],
    considerations: ["Brand positioning", "Retail readiness", "Reliable availability"],
  },
  {
    slug: "home-craft-and-households",
    name: "Home Craft & Households",
    image: "/media/category-home-craft.png",
    imageAlt: "Craft and household products on a work table",
    intro:
      "A practical route to market for craft supplies, household goods, and products made for everyday projects.",
    overview: [
      "Home craft and household products serve customers with specific needs, from creative projects to practical tasks around the home.",
      "We help brands evaluate the channels where those products make sense and coordinate the supply required to keep them moving.",
    ],
    considerations: ["Use-case clarity", "Seasonal demand", "Channel assortment"],
  },
  {
    slug: "home-and-kitchen",
    name: "Home & Kitchen",
    image: "/media/category-home-kitchen.png",
    imageAlt: "Kitchen tools and utensils",
    intro:
      "Connected distribution for useful home and kitchen products built around real consumer routines.",
    overview: [
      "Home and kitchen is a broad, competitive category where product utility and clear placement can make the difference between being stocked and being overlooked.",
      "CT Dynamics works with brands to focus on appropriate sales channels and the operational follow-through behind them.",
    ],
    considerations: ["Product utility", "Competitive placement", "Repeatable supply"],
  },
  {
    slug: "health-and-household",
    name: "Health & Household",
    image: "/media/category-health-household.png",
    imageAlt: "Health, hygiene, and household essentials",
    intro:
      "Dependable distribution for health, hygiene, and household products customers rely on regularly.",
    overview: [
      "Products in health and household categories depend on consistency. Buyers and consumers need confidence that essential items will remain available.",
      "Our role is to connect thoughtful channel expansion with responsive sourcing and fulfillment coordination.",
    ],
    considerations: ["Product consistency", "Retail presentation", "Supply continuity"],
  },
  {
    slug: "sports-and-outdoors",
    name: "Sports & Outdoors",
    image: "/media/category-sports-outdoors.png",
    imageAlt: "Outdoor and recreational equipment",
    intro:
      "Market support for sports, outdoor, and recreational products with clear customers and real use cases.",
    overview: [
      "Sports and outdoor products often move with seasonal demand, specific customer interests, and distinct retail environments.",
      "We help brands think through that fit, pursue practical opportunities, and prepare the supply plan behind growth.",
    ],
    considerations: ["Seasonal planning", "Customer fit", "Inventory readiness"],
  },
  {
    slug: "toys-and-games",
    name: "Toys & Games",
    image: "/media/category-toys-games.png",
    imageAlt: "Toys and wooden games",
    intro:
      "Distribution support for toy and game brands looking to turn consumer interest into wider availability.",
    overview: [
      "Toys and games need the right mix of audience, timing, presentation, and availability to perform across sales channels.",
      "CT Dynamics helps brands connect those considerations with a workable route from product readiness to purchase.",
    ],
    considerations: ["Audience alignment", "Seasonal timing", "Channel readiness"],
  },
  {
    slug: "electronics",
    name: "Electronics",
    image: "/media/category-electronics.png",
    imageAlt: "Consumer electronics and accessories",
    intro:
      "Focused distribution for consumer electronics and accessories in fast-moving, competitive sales channels.",
    overview: [
      "Electronics brands need clear positioning and dependable availability in a category where products and customer expectations move quickly.",
      "We help connect channel opportunity with the supply and coordination needed to support it.",
    ],
    considerations: ["Product positioning", "Channel velocity", "Supply coordination"],
  },
  {
    slug: "pet",
    name: "Pet",
    image: "/media/category-pet.png",
    imageAlt: "Pet care products",
    intro:
      "Practical market expansion for pet products designed around everyday care, comfort, and convenience.",
    overview: [
      "Pet products serve highly engaged customers who value quality, consistency, and easy availability.",
      "We work with brands to identify appropriate channels and support the operational path behind continued demand.",
    ],
    considerations: ["Customer loyalty", "Repeat purchase", "Consistent availability"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    image: "/media/category-automotive.png",
    imageAlt: "Automotive care products and accessories",
    intro:
      "Distribution support for automotive care products, accessories, and practical tools made for drivers.",
    overview: [
      "Automotive products perform best when they are clearly matched to the customers, use cases, and retail environments they serve.",
      "CT Dynamics helps brands build that route thoughtfully and coordinate the movement required to sustain it.",
    ],
    considerations: ["Use-case fit", "Buyer clarity", "Reliable movement"],
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
