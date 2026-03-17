export interface Hotel {
  name: string;
  price: number;
  rating: number;
  image?: string;
}

export interface StateInfo {
  name: string;
  image?: string;
  hotels: Hotel[];
}

export interface Destination {
  name: string;
  image: string;
  description: string;
  category: string;
  rating: number;
  states: StateInfo[];
}

export const DESTINATIONS: Destination[] = [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    description: 'City of love and lights',
    category: 'City',
    rating: 4.8,
    states: [
      {
        name: 'Montmartre',
        image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Terrass Hotel', price: 9500, rating: 4.6 },
          { name: 'Le Relais Montmartre', price: 7200, rating: 4.4 },
        ],
      },
      {
        name: 'Champs-Élysées',
        image: 'https://images.unsplash.com/photo-1569931729782-0f8ad59f6b20?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Hôtel de Crillon', price: 28000, rating: 4.8 },
          { name: 'Le Bristol Paris', price: 30000, rating: 4.9 },
        ],
      },
      {
        name: 'Latin Quarter',
        image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Hotel Les Dames du Panthéon', price: 11000, rating: 4.5 },
          { name: 'Hotel Monge', price: 12000, rating: 4.7 },
        ],
      },
    ],
  },
  {
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Luxury island getaway',
    category: 'Beach',
    rating: 4.9,
    states: [
      {
        name: 'Malé',
        image: 'https://images.unsplash.com/photo-1561289026-1a54a78f2f23?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Samann Grand', price: 14000, rating: 4.5 },
          { name: 'Jen Maldives', price: 16000, rating: 4.6 },
        ],
      },
      {
        name: 'Ari Atoll',
        image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Constance Moofushi', price: 42000, rating: 4.8 },
          { name: 'Lily Beach Resort', price: 48000, rating: 4.9 },
        ],
      },
      {
        name: 'Baa Atoll',
        image: 'https://images.unsplash.com/photo-1510414696678-2415ad8474aa?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Soneva Fushi', price: 65000, rating: 4.9 },
          { name: 'Amilla Maldives', price: 52000, rating: 4.7 },
        ],
      },
    ],
  },
  {
    name: 'India',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1',
    description: 'Culture and heritage',
    category: 'Culture',
    rating: 4.7,
    states: [
      {
        name: 'Kerala',
        image: 'https://images.unsplash.com/photo-1602304752427-2d0441c8b123?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'The Leela Kovalam', price: 12000, rating: 4.6 },
          { name: 'Kumarakom Lake Resort', price: 15000, rating: 4.7 },
        ],
      },
      {
        name: 'Delhi',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Taj Palace, New Delhi', price: 16000, rating: 4.7 },
          { name: 'The Imperial', price: 22000, rating: 4.8 },
        ],
      },
      {
        name: 'Goa',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Taj Exotica Resort & Spa', price: 18000, rating: 4.7 },
          { name: 'W Goa', price: 20000, rating: 4.6 },
        ],
      },
    ],
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    description: 'Modern desert paradise',
    category: 'City',
    rating: 4.6,
    states: [
      {
        name: 'Downtown Dubai',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Address Downtown', price: 24000, rating: 4.7 },
          { name: 'Armani Hotel Dubai', price: 32000, rating: 4.8 },
        ],
      },
      {
        name: 'Dubai Marina',
        image: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Grosvenor House', price: 21000, rating: 4.6 },
          { name: 'JW Marriott Marina', price: 18000, rating: 4.5 },
        ],
      },
      {
        name: 'Palm Jumeirah',
        image: 'https://images.unsplash.com/photo-1526523052323-09e38f68d0b3?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Atlantis The Palm', price: 26000, rating: 4.7 },
          { name: 'W Dubai - The Palm', price: 23000, rating: 4.6 },
        ],
      },
    ],
  },
  {
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop',
    description: 'Tropical paradise with beautiful temples',
    category: 'Beach',
    rating: 4.8,
    states: [
      {
        name: 'Ubud',
        image: 'https://images.unsplash.com/photo-1523413457742-1d8c2f64f082?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Hanging Gardens of Bali', price: 25000, rating: 4.7 },
          { name: 'Alaya Resort Ubud', price: 9000, rating: 4.6 },
        ],
      },
      {
        name: 'Seminyak',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'W Bali - Seminyak', price: 22000, rating: 4.7 },
          { name: 'The Legian Seminyak', price: 28000, rating: 4.8 },
        ],
      },
      {
        name: 'Uluwatu',
        image: 'https://images.unsplash.com/photo-1604998103924-89e012e52695?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Alila Villas Uluwatu', price: 36000, rating: 4.8 },
          { name: 'Six Senses Uluwatu', price: 34000, rating: 4.7 },
        ],
      },
    ],
  },
  {
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop',
    description: 'The city that never sleeps',
    category: 'City',
    rating: 4.7,
    states: [
      {
        name: 'Manhattan',
        image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'The Plaza', price: 35000, rating: 4.7 },
          { name: 'The Langham, New York', price: 32000, rating: 4.6 },
        ],
      },
      {
        name: 'Brooklyn',
        image: 'https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'The William Vale', price: 24000, rating: 4.5 },
          { name: '1 Hotel Brooklyn Bridge', price: 30000, rating: 4.7 },
        ],
      },
      {
        name: 'Queens',
        image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Boro Hotel', price: 17000, rating: 4.4 },
          { name: 'Hyatt Place Long Island City', price: 16000, rating: 4.3 },
        ],
      },
    ],
  },
  {
    name: 'Rome',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=2070&auto=format&fit=crop',
    description: 'Historic city with ancient architecture',
    category: 'Culture',
    rating: 4.8,
    states: [
      {
        name: 'Centro Storico',
        image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Hotel Artemide', price: 16000, rating: 4.7 },
          { name: 'The First Roma Dolce', price: 19000, rating: 4.6 },
        ],
      },
      {
        name: 'Trastevere',
        image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'VOI Donna Camilla Savelli', price: 14000, rating: 4.5 },
          { name: 'Hotel Santa Maria', price: 12000, rating: 4.4 },
        ],
      },
      {
        name: 'Vatican Area',
        image: 'https://images.unsplash.com/photo-1526481280695-3c687fd5432c?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Hotel Columbus', price: 15000, rating: 4.4 },
          { name: 'Starhotels Michelangelo', price: 17000, rating: 4.5 },
        ],
      },
    ],
  },
  {
    name: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    description: 'Snowy mountains and scenic beauty',
    category: 'Nature',
    rating: 4.9,
    states: [
      {
        name: 'Zurich',
        image: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Baur au Lac', price: 42000, rating: 4.8 },
          { name: 'Storchen Zürich', price: 36000, rating: 4.7 },
        ],
      },
      {
        name: 'Lucerne',
        image: 'https://images.unsplash.com/photo-1506377875725-6f01f0f8e1b0?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Hotel Schweizerhof Luzern', price: 28000, rating: 4.7 },
          { name: 'Radisson Blu Hotel', price: 22000, rating: 4.5 },
        ],
      },
      {
        name: 'Interlaken',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop',
        hotels: [
          { name: 'Victoria-Jungfrau Grand Hotel', price: 45000, rating: 4.8 },
          { name: 'Hotel Interlaken', price: 21000, rating: 4.4 },
        ],
      },
    ],
  },
];