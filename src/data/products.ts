// Product data for all categories

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  description?: string;
}

// PS5 Games - Top 50 games
export const ps5Games: Product[] = [
  { id: "game-1", name: "Elden Ring", price: 3999, originalPrice: 4999, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.9, inStock: true },
  { id: "game-2", name: "God of War Ragnarök", price: 4499, originalPrice: 5499, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.9, inStock: true },
  { id: "game-3", name: "Spider-Man 2", price: 4999, image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.8, inStock: true },
  { id: "game-4", name: "Final Fantasy XVI", price: 4299, originalPrice: 5499, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-5", name: "Baldur's Gate 3", price: 4999, image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.9, inStock: true },
  { id: "game-6", name: "Hogwarts Legacy", price: 3999, originalPrice: 4999, image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.6, inStock: true },
  { id: "game-7", name: "Horizon Forbidden West", price: 3499, originalPrice: 4999, image: "https://images.unsplash.com/photo-1493711662062-fa541f7f897a?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-8", name: "The Last of Us Part I", price: 4999, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.8, inStock: true },
  { id: "game-9", name: "Gran Turismo 7", price: 4499, originalPrice: 5499, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-10", name: "Demon's Souls", price: 3999, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-11", name: "Returnal", price: 4999, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.6, inStock: true },
  { id: "game-12", name: "Ratchet & Clank: Rift Apart", price: 4499, image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.8, inStock: true },
  { id: "game-13", name: "Astro Bot", price: 3999, image: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.9, inStock: true },
  { id: "game-14", name: "Resident Evil 4 Remake", price: 3999, originalPrice: 4999, image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.8, inStock: true },
  { id: "game-15", name: "Final Fantasy VII Rebirth", price: 5499, image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.8, inStock: true },
  { id: "game-16", name: "Death Stranding DC", price: 2999, originalPrice: 3999, image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-17", name: "Ghost of Tsushima DC", price: 3999, image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.8, inStock: true },
  { id: "game-18", name: "Sekiro: Shadows Die Twice", price: 3499, image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-19", name: "Cyberpunk 2077", price: 2999, originalPrice: 4999, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.4, inStock: true },
  { id: "game-20", name: "The Witcher 3: Wild Hunt", price: 2499, image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.9, inStock: true },
  { id: "game-21", name: "Stellar Blade", price: 4999, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.6, inStock: true },
  { id: "game-22", name: "Dragon's Dogma 2", price: 4999, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-23", name: "Rise of the Ronin", price: 4999, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.4, inStock: true },
  { id: "game-24", name: "Diablo IV", price: 4499, originalPrice: 5499, image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-25", name: "Star Wars Jedi: Survivor", price: 4999, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.6, inStock: true },
  { id: "game-26", name: "Lies of P", price: 3999, image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-27", name: "Like a Dragon: Ishin", price: 3999, image: "https://images.unsplash.com/photo-1493711662062-fa541f7f897a?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.4, inStock: true },
  { id: "game-28", name: "Armored Core VI", price: 4499, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.6, inStock: true },
  { id: "game-29", name: "Street Fighter 6", price: 3999, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-30", name: "Mortal Kombat 1", price: 4499, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-31", name: "Tekken 8", price: 4999, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-32", name: "Call of Duty: MW III", price: 4999, image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.2, inStock: true },
  { id: "game-33", name: "EA Sports FC 25", price: 4499, image: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.3, inStock: true },
  { id: "game-34", name: "NBA 2K25", price: 4499, image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.2, inStock: true },
  { id: "game-35", name: "WWE 2K24", price: 3999, image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.3, inStock: true },
  { id: "game-36", name: "Crash Bandicoot 4", price: 2999, image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-37", name: "Sackboy: A Big Adventure", price: 2999, image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.4, inStock: true },
  { id: "game-38", name: "It Takes Two", price: 2499, image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.8, inStock: true },
  { id: "game-39", name: "Stray", price: 1999, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.6, inStock: true },
  { id: "game-40", name: "Sifu", price: 2499, image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-41", name: "Hades", price: 1999, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.9, inStock: true },
  { id: "game-42", name: "Dead Space Remake", price: 4499, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-43", name: "Uncharted: Legacy Collection", price: 3999, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-44", name: "Assassin's Creed Mirage", price: 3999, originalPrice: 4999, image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.3, inStock: true },
  { id: "game-45", name: "Prince of Persia: Lost Crown", price: 3499, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-46", name: "Alan Wake 2", price: 4999, image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.7, inStock: true },
  { id: "game-47", name: "Lords of the Fallen", price: 4499, image: "https://images.unsplash.com/photo-1493711662062-fa541f7f897a?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.2, inStock: true },
  { id: "game-48", name: "Persona 5 Royal", price: 3999, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.9, inStock: true },
  { id: "game-49", name: "Kena: Bridge of Spirits", price: 2999, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.5, inStock: true },
  { id: "game-50", name: "Little Nightmares II", price: 2499, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop", category: "ps5-games", rating: 4.6, inStock: true },
];

// PS5 Consoles & Bundles - 12+ items
export const ps5Items: Product[] = [
  { id: "ps5-1", name: "PS5 Digital Edition", price: 39999, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", category: "ps5", rating: 4.9, inStock: true },
  { id: "ps5-2", name: "PS5 Disc Edition", price: 49999, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop", category: "ps5", rating: 4.9, inStock: true },
  { id: "ps5-3", name: "PS5 Slim Digital", price: 44999, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", category: "ps5", rating: 4.8, inStock: true },
  { id: "ps5-4", name: "PS5 Slim Disc Edition", price: 54999, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop", category: "ps5", rating: 4.8, inStock: true },
  { id: "ps5-5", name: "PS5 Pro", price: 69999, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", category: "ps5", rating: 4.9, inStock: true },
  { id: "ps5-6", name: "PS5 Spider-Man 2 Bundle", price: 54999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop", category: "ps5", rating: 4.9, inStock: true },
  { id: "ps5-7", name: "PS5 God of War Bundle", price: 54999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", category: "ps5", rating: 4.8, inStock: true },
  { id: "ps5-8", name: "PS5 Horizon Bundle", price: 52999, originalPrice: 57999, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop", category: "ps5", rating: 4.7, inStock: true },
  { id: "ps5-9", name: "PS5 + Extra Controller", price: 47999, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", category: "ps5", rating: 4.8, inStock: true },
  { id: "ps5-10", name: "PS5 Call of Duty Bundle", price: 54999, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop", category: "ps5", rating: 4.6, inStock: true },
  { id: "ps5-11", name: "PS5 Fortnite Bundle", price: 44999, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", category: "ps5", rating: 4.5, inStock: true },
  { id: "ps5-12", name: "PS5 NBA 2K Bundle", price: 52999, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop", category: "ps5", rating: 4.6, inStock: true },
  { id: "ps5-13", name: "PS5 Ultimate Gaming Bundle", price: 64999, originalPrice: 74999, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop", category: "ps5", rating: 4.9, inStock: true },
];

// Accessories - 30+ items
export const accessories: Product[] = [
  { id: "acc-1", name: "DualSense Controller White", price: 5499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, inStock: true },
  { id: "acc-2", name: "DualSense Midnight Black", price: 5499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, inStock: true },
  { id: "acc-3", name: "DualSense Cosmic Red", price: 5499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, inStock: true },
  { id: "acc-4", name: "DualSense Starlight Blue", price: 5499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.7, inStock: true },
  { id: "acc-5", name: "DualSense Edge Controller", price: 18999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.6, inStock: true },
  { id: "acc-6", name: "PS5 Pulse 3D Headset", price: 8999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "accessories", rating: 4.7, inStock: true },
  { id: "acc-7", name: "PS5 HD Camera", price: 4999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, inStock: true },
  { id: "acc-8", name: "PS5 Media Remote", price: 2499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.4, inStock: true },
  { id: "acc-9", name: "DualSense Charging Station", price: 2499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, inStock: true },
  { id: "acc-10", name: "PS5 Vertical Stand", price: 2999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.6, inStock: true },
  { id: "acc-11", name: "PS5 Console Cover Blue", price: 4499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, inStock: true },
  { id: "acc-12", name: "PS5 Console Cover Red", price: 4499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, inStock: true },
  { id: "acc-13", name: "PS5 SSD 1TB WD Black", price: 9999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, inStock: true },
  { id: "acc-14", name: "PS5 SSD 2TB Samsung", price: 15999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.9, inStock: true },
  { id: "acc-15", name: "Gaming Headset HyperX", price: 7999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "accessories", rating: 4.7, inStock: true },
  { id: "acc-16", name: "Gaming Headset Razer", price: 12999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, inStock: true },
  { id: "acc-17", name: "Gaming Headset SteelSeries", price: 11999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "accessories", rating: 4.7, inStock: true },
  { id: "acc-18", name: "Controller Thumb Grips", price: 499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, inStock: true },
  { id: "acc-19", name: "Controller Skin Sticker", price: 699, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.3, inStock: true },
  { id: "acc-20", name: "HDMI 2.1 Cable 2M", price: 1499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.6, inStock: true },
  { id: "acc-21", name: "PS5 Dust Cover", price: 999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.4, inStock: true },
  { id: "acc-22", name: "Cooling Fan Stand", price: 2999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.3, inStock: true },
  { id: "acc-23", name: "Gaming Monitor 27\" 4K", price: 34999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.8, inStock: true },
  { id: "acc-24", name: "Gaming Chair Pro", price: 24999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.6, inStock: true },
  { id: "acc-25", name: "TV Stand with Storage", price: 8999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, inStock: true },
  { id: "acc-26", name: "Keyboard Wireless Gaming", price: 6999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.6, inStock: true },
  { id: "acc-27", name: "Mouse Wireless Gaming", price: 4999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.7, inStock: true },
  { id: "acc-28", name: "Game Storage Tower", price: 2499, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.4, inStock: true },
  { id: "acc-29", name: "LED Light Strip RGB", price: 1999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, inStock: true },
  { id: "acc-30", name: "Controller Carry Case", price: 1299, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.6, inStock: true },
  { id: "acc-31", name: "PS5 Travel Bag", price: 3999, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop", category: "accessories", rating: 4.5, inStock: true },
];

// VR Headsets - 5+ items
export const vrHeadsets: Product[] = [
  { id: "vr-1", name: "PlayStation VR2", price: 54999, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=300&fit=crop", category: "vr", rating: 4.7, inStock: true },
  { id: "vr-2", name: "PS VR2 + Horizon Bundle", price: 59999, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=300&fit=crop", category: "vr", rating: 4.8, inStock: true },
  { id: "vr-3", name: "PS VR2 Sense Controller", price: 5999, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=300&fit=crop", category: "vr", rating: 4.6, inStock: true },
  { id: "vr-4", name: "PS VR2 Charging Dock", price: 3999, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=300&fit=crop", category: "vr", rating: 4.5, inStock: true },
  { id: "vr-5", name: "Meta Quest 3", price: 49999, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=300&fit=crop", category: "vr", rating: 4.8, inStock: true },
  { id: "vr-6", name: "VR Comfort Strap", price: 2999, image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=300&fit=crop", category: "vr", rating: 4.4, inStock: true },
];

// Racing Wheels - 8+ items
export const racingWheels: Product[] = [
  { id: "rw-1", name: "Logitech G29 Wheel", price: 24999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.7, inStock: true },
  { id: "rw-2", name: "Logitech G923 TRUEFORCE", price: 34999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.8, inStock: true },
  { id: "rw-3", name: "Thrustmaster T300 RS GT", price: 42999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.8, inStock: true },
  { id: "rw-4", name: "Thrustmaster T248", price: 29999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.6, inStock: true },
  { id: "rw-5", name: "Fanatec Gran Turismo DD", price: 79999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.9, inStock: true },
  { id: "rw-6", name: "Hori Racing Wheel Apex", price: 14999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.4, inStock: true },
  { id: "rw-7", name: "Racing Wheel Stand Pro", price: 12999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.5, inStock: true },
  { id: "rw-8", name: "Playseat Challenge X", price: 34999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.7, inStock: true },
  { id: "rw-9", name: "Next Level Racing Seat", price: 49999, image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=300&h=300&fit=crop", category: "racing", rating: 4.8, inStock: true },
];

// Collectables - 20+ items
export const collectables: Product[] = [
  { id: "col-1", name: "Kratos Statue 12\"", price: 12999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.9, inStock: true },
  { id: "col-2", name: "Spider-Man Action Figure", price: 4999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.7, inStock: true },
  { id: "col-3", name: "Aloy Horizon Figure", price: 6999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.8, inStock: true },
  { id: "col-4", name: "PlayStation Logo LED", price: 3999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.6, inStock: true },
  { id: "col-5", name: "Ellie Last of Us Figure", price: 5999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.7, inStock: true },
  { id: "col-6", name: "Ratchet & Clank Figure", price: 4499, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.5, inStock: true },
  { id: "col-7", name: "Elden Ring Tarnished", price: 8999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.8, inStock: true },
  { id: "col-8", name: "Cloud Strife FF7 Figure", price: 7999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.9, inStock: true },
  { id: "col-9", name: "Gaming Poster Set (5)", price: 1999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.4, inStock: true },
  { id: "col-10", name: "PS5 Art Book Collection", price: 2999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.6, inStock: true },
  { id: "col-11", name: "Gaming Keychain Set", price: 799, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.3, inStock: true },
  { id: "col-12", name: "PlayStation Mug", price: 999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.5, inStock: true },
  { id: "col-13", name: "Gaming T-Shirt Collection", price: 1499, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.4, inStock: true },
  { id: "col-14", name: "Funko Pop Kratos", price: 1299, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.7, inStock: true },
  { id: "col-15", name: "Funko Pop Spider-Man", price: 1299, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.8, inStock: true },
  { id: "col-16", name: "Gaming Wall Clock", price: 2499, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.5, inStock: true },
  { id: "col-17", name: "PS Button Coaster Set", price: 1199, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.4, inStock: true },
  { id: "col-18", name: "Gaming Mouse Pad XL", price: 1999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.6, inStock: true },
  { id: "col-19", name: "Astro Bot Plush", price: 2499, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.7, inStock: true },
  { id: "col-20", name: "Gaming Backpack", price: 4999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.5, inStock: true },
  { id: "col-21", name: "Collector's Edition Box Set", price: 14999, image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300&h=300&fit=crop", category: "collectables", rating: 4.9, inStock: true },
];

// Gaming PCs - 10+ builds
export const gamingPCs: Product[] = [
  { id: "pc-1", name: "Entry Gaming PC", price: 59999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.5, inStock: true, description: "RTX 3060 | i5-12400F | 16GB RAM" },
  { id: "pc-2", name: "Mid-Range Gaming PC", price: 89999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.7, inStock: true, description: "RTX 4060 Ti | i5-13600K | 32GB RAM" },
  { id: "pc-3", name: "High-End Gaming PC", price: 149999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.8, inStock: true, description: "RTX 4070 Ti | i7-14700K | 32GB RAM" },
  { id: "pc-4", name: "Ultimate Gaming PC", price: 249999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.9, inStock: true, description: "RTX 4090 | i9-14900K | 64GB RAM" },
  { id: "pc-5", name: "Streaming PC", price: 119999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.6, inStock: true, description: "RTX 4070 | i7-13700K | 32GB RAM" },
  { id: "pc-6", name: "Compact ITX Gaming", price: 99999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.6, inStock: true, description: "RTX 4060 | i5-13400F | 16GB RAM" },
  { id: "pc-7", name: "RGB Showcase Build", price: 139999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.7, inStock: true, description: "RTX 4070 | i7-14700F | 32GB RAM" },
  { id: "pc-8", name: "Budget Esports PC", price: 49999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.4, inStock: true, description: "RTX 3050 | i3-12100F | 16GB RAM" },
  { id: "pc-9", name: "4K Gaming Monster", price: 199999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.9, inStock: true, description: "RTX 4080 Super | i9-14900K | 64GB RAM" },
  { id: "pc-10", name: "AMD Gaming PC", price: 109999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.7, inStock: true, description: "RX 7800 XT | Ryzen 7 7800X3D | 32GB RAM" },
  { id: "pc-11", name: "Workstation Gaming Hybrid", price: 179999, image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", category: "pc", rating: 4.8, inStock: true, description: "RTX 4080 | i9-13900K | 64GB RAM" },
];

// PC Parts - 100+ items
export const pcParts: Product[] = [
  // Graphics Cards
  { id: "part-1", name: "NVIDIA RTX 4090", price: 159999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-2", name: "NVIDIA RTX 4080 Super", price: 99999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-3", name: "NVIDIA RTX 4070 Ti", price: 74999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-4", name: "NVIDIA RTX 4070", price: 54999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-5", name: "NVIDIA RTX 4060 Ti", price: 39999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-6", name: "NVIDIA RTX 4060", price: 29999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  { id: "part-7", name: "AMD RX 7900 XTX", price: 89999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-8", name: "AMD RX 7800 XT", price: 49999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-9", name: "AMD RX 7600", price: 26999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  // Processors
  { id: "part-10", name: "Intel Core i9-14900K", price: 54999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-11", name: "Intel Core i7-14700K", price: 38999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-12", name: "Intel Core i5-14600K", price: 27999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-13", name: "Intel Core i5-13400F", price: 14999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-14", name: "AMD Ryzen 9 7950X3D", price: 59999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-15", name: "AMD Ryzen 7 7800X3D", price: 39999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-16", name: "AMD Ryzen 5 7600X", price: 19999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  // Motherboards
  { id: "part-17", name: "ASUS ROG Maximus Z790", price: 49999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-18", name: "MSI MEG Z790 ACE", price: 44999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-19", name: "Gigabyte Z790 AORUS Master", price: 42999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-20", name: "ASUS ROG Strix B760-F", price: 22999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-21", name: "MSI MAG B760 Tomahawk", price: 18999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-22", name: "ASUS ROG Crosshair X670E", price: 54999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-23", name: "MSI MEG X670E ACE", price: 49999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  // RAM
  { id: "part-24", name: "Corsair DDR5 32GB 6000MHz", price: 14999, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-25", name: "G.Skill DDR5 32GB 6400MHz", price: 17999, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-26", name: "Kingston Fury DDR5 64GB", price: 24999, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-27", name: "Corsair DDR5 16GB 5600MHz", price: 7999, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-28", name: "TeamGroup DDR5 32GB", price: 11999, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  // Storage
  { id: "part-29", name: "Samsung 990 Pro 2TB", price: 16999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-30", name: "WD Black SN850X 2TB", price: 14999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-31", name: "Samsung 980 Pro 1TB", price: 8999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-32", name: "Crucial T700 2TB", price: 24999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-33", name: "Seagate Firecuda 530 1TB", price: 10999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-34", name: "Kingston NV2 1TB", price: 4999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  // Power Supplies
  { id: "part-35", name: "Corsair RM1000x", price: 14999, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-36", name: "EVGA SuperNOVA 850 G7", price: 11999, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-37", name: "Seasonic Focus GX-850", price: 10999, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-38", name: "Corsair RM750e", price: 7999, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-39", name: "Be Quiet! Dark Power 1000W", price: 17999, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  // Cases
  { id: "part-40", name: "Lian Li O11 Dynamic", price: 14999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-41", name: "NZXT H7 Flow", price: 12999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-42", name: "Corsair 5000D Airflow", price: 14999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-43", name: "Fractal Torrent", price: 16999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-44", name: "Phanteks Evolv X", price: 17999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-45", name: "Cooler Master H500", price: 10999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  // Cooling
  { id: "part-46", name: "NZXT Kraken Z73", price: 22999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-47", name: "Corsair iCUE H150i Elite", price: 17999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-48", name: "Noctua NH-D15", price: 9999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-49", name: "Arctic Freezer II 360", price: 12999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-50", name: "Be Quiet! Dark Rock Pro 4", price: 8999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  // More Graphics Cards
  { id: "part-51", name: "RTX 3060 12GB", price: 24999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  { id: "part-52", name: "RTX 3070 Ti", price: 44999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-53", name: "RTX 3080 10GB", price: 54999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  // More Processors
  { id: "part-54", name: "Intel Core i3-13100F", price: 9999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.4, inStock: true },
  { id: "part-55", name: "AMD Ryzen 5 5600X", price: 14999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-56", name: "AMD Ryzen 7 5800X", price: 22999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  // More Storage
  { id: "part-57", name: "Seagate 4TB HDD", price: 7999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.4, inStock: true },
  { id: "part-58", name: "WD Blue 2TB HDD", price: 4999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  { id: "part-59", name: "Samsung 870 EVO 1TB SSD", price: 6999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-60", name: "Crucial MX500 2TB SSD", price: 9999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  // Monitors
  { id: "part-61", name: "LG 27GP850-B 27\" 165Hz", price: 34999, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-62", name: "ASUS ROG Swift PG279QM", price: 64999, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-63", name: "Samsung Odyssey G7 32\"", price: 49999, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-64", name: "MSI Optix MAG274QRF", price: 32999, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-65", name: "Dell S2722DGM 27\" 165Hz", price: 24999, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  // Keyboards
  { id: "part-66", name: "Corsair K100 RGB", price: 17999, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-67", name: "Razer Huntsman V3 Pro", price: 19999, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-68", name: "Logitech G Pro X", price: 12999, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-69", name: "SteelSeries Apex Pro", price: 15999, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-70", name: "Ducky One 3 SF", price: 10999, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  // Mice
  { id: "part-71", name: "Logitech G Pro X Superlight", price: 12999, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-72", name: "Razer DeathAdder V3", price: 7999, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-73", name: "Zowie EC2-CW", price: 11999, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-74", name: "Pulsar X2 Mini", price: 9999, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-75", name: "Finalmouse UltralightX", price: 17999, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  // Headsets
  { id: "part-76", name: "SteelSeries Arctis Nova Pro", price: 29999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-77", name: "Logitech G Pro X 2", price: 19999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-78", name: "HyperX Cloud III", price: 9999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-79", name: "Razer BlackShark V2 Pro", price: 14999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-80", name: "Astro A50 Wireless", price: 29999, image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  // Fans & Case Accessories
  { id: "part-81", name: "Corsair LL120 RGB 3-Pack", price: 7999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-82", name: "Noctua NF-A12x25", price: 2499, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-83", name: "Lian Li UNI Fan SL120", price: 8999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-84", name: "Arctic P12 PWM PST 5-Pack", price: 2999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-85", name: "EKWB 360mm AIO Kit", price: 34999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  // More Budget Options
  { id: "part-86", name: "Intel Core i5-12400F", price: 12999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.7, inStock: true },
  { id: "part-87", name: "AMD Ryzen 5 5500", price: 10999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  { id: "part-88", name: "GTX 1660 Super", price: 17999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.4, inStock: true },
  { id: "part-89", name: "B550 Motherboard MSI", price: 10999, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  { id: "part-90", name: "Corsair CX650M PSU", price: 5999, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  // Premium Options
  { id: "part-91", name: "NVIDIA RTX 4090 ASUS Strix", price: 189999, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-92", name: "AMD Threadripper 7980X", price: 449999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-93", name: "Corsair Dominator DDR5 64GB", price: 44999, image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  { id: "part-94", name: "Samsung 990 Pro 4TB", price: 34999, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-95", name: "Corsair HX1500i PSU", price: 29999, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.9, inStock: true },
  // Misc
  { id: "part-96", name: "Cable Mod Pro Kit", price: 5999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.6, inStock: true },
  { id: "part-97", name: "Thermal Grizzly Kryonaut", price: 999, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.8, inStock: true },
  { id: "part-98", name: "Fan Hub Controller", price: 1999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.4, inStock: true },
  { id: "part-99", name: "RGB Light Strip Kit", price: 2499, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  { id: "part-100", name: "PCIe Riser Cable", price: 2999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.5, inStock: true },
  { id: "part-101", name: "M.2 Heatsink", price: 799, image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.4, inStock: true },
  { id: "part-102", name: "GPU Support Bracket", price: 999, image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=300&h=300&fit=crop", category: "pc-parts", rating: 4.3, inStock: true },
];

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  switch (categoryId) {
    case "ps5-games":
      return ps5Games;
    case "ps5":
      return ps5Items;
    case "accessories":
      return accessories;
    case "vr":
      return vrHeadsets;
    case "racing":
      return racingWheels;
    case "collectables":
      return collectables;
    case "pc":
      return gamingPCs;
    case "pc-parts":
      return pcParts;
    default:
      return [];
  }
};

// Get category info
export const getCategoryInfo = (categoryId: string) => {
  const categoryMap: Record<string, { name: string; description: string }> = {
    "ps5-games": { name: "PS5 Games", description: "Top 50+ PlayStation 5 games" },
    "ps5": { name: "PS5 Consoles", description: "PlayStation 5 consoles and bundles" },
    "accessories": { name: "Accessories", description: "Controllers, headsets, and more" },
    "vr": { name: "VR Headsets", description: "Virtual Reality gaming devices" },
    "racing": { name: "Racing Wheels", description: "Steering wheels and racing gear" },
    "collectables": { name: "Collectables", description: "Gaming merchandise and collectibles" },
    "pc": { name: "Gaming PCs", description: "Pre-built gaming computers" },
    "pc-parts": { name: "PC Parts", description: "Components for custom builds" },
  };
  return categoryMap[categoryId] || { name: "Products", description: "Browse our collection" };
};
