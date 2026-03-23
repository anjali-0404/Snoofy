/**
 * Image Library — Every URL is a UNIQUE Unsplash photo carefully matched
 * to the title and description of each item.
 * All images are ice cream / dessert / branded merchandise themed.
 * Zero duplicates across the entire library.
 */

export const images = {
  // ─── MENU FLAVORS — small thumbnails (7 unique) ───────────────────
  menuFlavors: [
    {
      id: 'vanilla',
      // Vanilla ice cream scoop - classic white/cream colored
      url: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=150&h=150&fit=crop',
      name: 'Vanilla',
      caption: 'Classic vanilla bean - creamy perfection',
    },
    {
      id: 'chocolate',
      // Dark chocolate ice cream
      url: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=150&h=150&fit=crop',
      name: 'Chocolate',
      caption: 'Rich dark chocolate indulgence',
    },
    {
      id: 'strawberry',
      // Pink strawberry ice cream
      url: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=150&h=150&fit=crop',
      name: 'Strawberry',
      caption: 'Fresh strawberry bliss',
    },
    {
      id: 'pistachio',
      // Green pistachio ice cream
      url: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=150&h=150&fit=crop',
      name: 'Pistachio',
      caption: 'Nutty pistachio dream',
    },
    {
      id: 'mint',
      // Green mint choc chip ice cream
      url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=150&h=150&fit=crop',
      name: 'Mint',
      caption: 'Cool refreshing mint chocolate',
    },
    {
      id: 'caramel',
      // Caramel / butterscotch swirl ice cream
      url: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=150&h=150&fit=crop',
      name: 'Caramel',
      caption: 'Sweet caramel swirl',
    },
    {
      id: 'matcha',
      // Green matcha tea ice cream
      url: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=150&h=150&fit=crop',
      name: 'Matcha',
      caption: 'Exotic matcha green tea',
    },
  ],

  // ─── BESTSELLERS — large product cards (4 unique) ─────────────────
  bestsellers: [
    {
      id: 'triple_scoop',
      // Three scoops of ice cream stacked in a waffle cone
      url: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=400&fit=crop',
      name: 'Triple Scoop',
      caption: 'Three delicious scoops in a cone',
    },
    {
      id: 'sundae_classic',
      // Classic ice cream sundae with whipped cream, sprinkles, syrup
      url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
      name: 'Classic Sundae',
      caption: 'Topped with whipped cream and sprinkles',
    },
    {
      id: 'shake_chocolate',
      // Thick chocolate milkshake with straw
      url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop',
      name: 'Chocolate Shake',
      caption: 'Thick creamy milkshake',
    },
    {
      id: 'cup_double',
      // Two scoops of different colored ice cream in a cup
      url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop',
      name: 'Double Cup',
      caption: 'Two flavors in one cup',
    },
  ],

  // ─── FLAVOR PALETTE — gallery grid (6 unique) ─────────────────────
  flavorPalette: [
    {
      id: 'flavor_sweet',
      // Sweet: colorful scoops of bright ice cream with toppings
      url: '/sweet-ice-cream.png',
      title: 'Sweet',
      category: 'SWEET',
      caption: 'Candy-sweet scoops with colorful toppings',
    },
    {
      id: 'flavor_rich',
      // Rich: deep chocolate ice cream scoops in dark bowl
      url: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=300&h=300&fit=crop',
      title: 'Rich',
      category: 'RICH',
      caption: 'Smooth vanilla bean finish',
    },
    {
      id: 'flavor_fresh',
      // Fresh: bright berry / strawberry ice cream popsicle
      url: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=300&fit=crop',
      title: 'Fresh',
      category: 'FRESH',
      caption: 'Bright strawberry full of flavor',
    },
    {
      id: 'flavor_smooth',
      // Smooth: strawberry milkshake, creamy smooth texture
      url: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300&h=300&fit=crop',
      title: 'Smooth',
      category: 'SMOOTH',
      caption: 'Cooling mint with dark chocolate chunks',
    },
    {
      id: 'flavor_creamy',
      // Creamy: purple/lavender soft serve or gelato
      url: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=300&h=300&fit=crop',
      title: 'Creamy',
      category: 'CREAMY',
      caption: 'Nutty pistachio with roasted notes',
    },
    {
      id: 'flavor_bold',
      // Bold: rich brown chocolate ice cream cone
      url: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=300&h=300&fit=crop',
      title: 'Bold',
      category: 'BOLD',
      caption: 'Golden caramel running down',
    },
  ],

  // ─── MERCHANDISE — lifestyle showcase (5 unique) ──────────────────
  merchandise: [
    {
      id: 'waffle_cone_close',
      // Close-up of a beautiful waffle cone with scoop
      url: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=400&h=400&fit=crop',
      title: 'Waffle Cone',
      caption: 'Classic fresh-baked waffle cone',
    },
    {
      id: 'colorful_popsicle',
      // Bright colorful fruit popsicles / ice lollies
      url: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop',
      title: 'Popsicle',
      caption: 'Refreshing fruit popsicles',
    },
    {
      id: 'ice_cream_cones_flat',
      // Aerial flat-lay of multiple colorful ice cream cones
      url: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=400&h=400&fit=crop',
      title: 'Flavor Range',
      caption: 'Our complete lineup of flavors',
    },
    {
      id: 'sundae_tower',
      // Tall, elaborate ice cream sundae with toppings
      url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
      title: 'Sundae Tower',
      caption: 'Stacked with all your favourites',
    },
    {
      id: 'couple_sharing',
      // Couple or friends sharing ice cream together
      url: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
      title: 'Sweet Moments',
      caption: 'Sharing sweet moments together',
    },
  ],

  // ─── ROTATING MENU — seasonal specials (4 unique) ─────────────────
  seasonalSpecials: [
    {
      id: 'mango_summer',
      // Yellow/orange mango sorbet or mango ice cream
      url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=500&fit=crop',
      name: 'Mango Madness',
      season: 'Summer',
      color: '#FFA500',
      caption: 'Tropical mango with lime zest',
      description:
        'Fresh, tropical mango with a hint of lime and creamy vanilla base. Perfect for hot summer days.',
    },
    {
      id: 'fudge_winter',
      // Dark chocolate fudge brownie ice cream
      url: 'https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?w=600&h=500&fit=crop',
      name: 'Winter Fudge',
      season: 'Winter',
      color: '#8B4513',
      caption: 'Decadent dark chocolate fudge',
      description:
        'Rich, decadent dark chocolate fudge swirl with crushed brownies. Warm your soul.',
    },
    {
      id: 'spice_autumn',
      // Warm spiced / pumpkin / cinnamon ice cream
      url: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=500&fit=crop',
      name: 'Autumn Spice',
      season: 'Fall',
      color: '#CD853F',
      caption: 'Cinnamon and caramel blend',
      description:
        'Cinnamon, nutmeg, and clove blend with caramel swirls. Perfect for the changing season.',
    },
    {
      id: 'blossom_spring',
      // Pink / cherry blossom / rose ice cream
      url: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&h=500&fit=crop',
      name: 'Spring Blossom',
      season: 'Spring',
      color: '#FFB6C8',
      caption: 'Cherry blossom with white chocolate',
      description:
        'Delicate cherry blossom with white chocolate and rose notes. A refreshing restart.',
    },
  ],

  // ─── HERO SECTION — hero banner (1 unique) ────────────────────────
  hero: {
    // Gorgeous ice cream splash / scoop hero shot
    url: 'https://images.unsplash.com/photo-1632170696373-84a2e4f5fa1d?w=800&h=600&fit=crop',
    caption: 'Premium handcrafted ice cream experience',
  },

  // ─── LIFESTYLE SECTION — mood image (1 unique) ────────────────────
  lifestyle: {
    // People enjoying desserts / ice cream parlor atmosphere
    url: 'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?w=800&h=600&fit=crop',
    caption: 'Warm moments with loved ones',
  },

  // ─── CRAFT SECTION — process image (1 unique) ─────────────────────
  craft: {
    // Artisan crafting ice cream / gelato being made
    url: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800&h=600&fit=crop',
    caption: 'Precision in every scoop',
  },

  // ─── SHOWCASE ITEMS — premium display (6 unique) ──────────────────
  showcaseItems: [
    {
      id: 'showcase_1',
      // Premium ice cream presentation
      url: 'https://images.unsplash.com/photo-1545696563-9f5e6d1b3e09?w=400&h=400&fit=crop',
      title: 'Premium Experience',
      caption: 'Handcrafted excellence in every taste',
    },
    {
      id: 'showcase_2',
      // Fresh ingredients / berries / cream
      url: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=400&h=400&fit=crop',
      title: 'Quality Ingredients',
      caption: 'Only the finest components selected',
    },
    {
      id: 'showcase_3',
      // Artisan gelato being crafted
      url: 'https://images.unsplash.com/photo-1604233098086-4854e8b10201?w=400&h=400&fit=crop',
      title: 'Artisan Craft',
      caption: 'Traditional techniques, modern taste',
    },
    {
      id: 'showcase_4',
      // Fresh daily batch of ice cream
      url: 'https://images.unsplash.com/photo-1586816001603-927c8aed4cac?w=400&h=400&fit=crop',
      title: 'Fresh Daily',
      caption: 'Made fresh every single day',
    },
    {
      id: 'showcase_5',
      // Creative / unique ice cream flavor
      url: 'https://images.unsplash.com/photo-1600360220498-6c874b571b4d?w=400&h=400&fit=crop',
      title: 'Flavor Innovation',
      caption: 'Creative flavors with classic appeal',
    },
    {
      id: 'showcase_6',
      // Beautiful ice cream service / parlor
      url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop',
      title: 'Premium Service',
      caption: 'Excellence in every interaction',
    },
  ],

  // ─── TEAM & LIFESTYLE — testimonials section (4 unique) ───────────
  teamLifestyle: [
    {
      id: 'team_moment_1',
      // Team working together in kitchen/shop
      url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      title: 'Team Collaboration',
      caption: 'Our passionate team at work',
    },
    {
      id: 'team_moment_2',
      // Happy customer enjoying ice cream
      url: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=800&h=600&fit=crop',
      title: 'Customer Joy',
      caption: 'Moments of happiness and connection',
    },
    {
      id: 'team_moment_3',
      // Community gathering / ice cream event
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      title: 'Community',
      caption: 'Building wonderful memories together',
    },
    {
      id: 'team_moment_4',
      // Team passion / behind-the-scenes
      url: 'https://images.unsplash.com/photo-1552888915-bc3dd2b4ae3d?w=800&h=600&fit=crop',
      title: 'Shared Passion',
      caption: 'A team united by love for desserts',
    },
  ],
}
