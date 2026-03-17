export interface Hotel {
  name: string;
  price: number;
  rating: number;
  image?: string;
}

export interface StateInfo {
  name: string;
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
        hotels: [
          { name: 'Terrass Hotel', price: 9500, rating: 4.6 },
          { name: 'Le Relais Montmartre', price: 7200, rating: 4.4 },
        ],
      },
      {
        name: 'Champs-Élysées',
        hotels: [
          { name: 'Hôtel de Crillon', price: 28000, rating: 4.8 },
          { name: 'Le Bristol Paris', price: 30000, rating: 4.9 },
        ],
      },
      {
        name: 'Latin Quarter',
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
        hotels: [
          { name: 'Samann Grand', price: 14000, rating: 4.5 },
          { name: 'Jen Maldives', price: 16000, rating: 4.6 },
        ],
      },
      {
        name: 'Ari Atoll',
        hotels: [
          { name: 'Constance Moofushi', price: 42000, rating: 4.8 },
          { name: 'Lily Beach Resort', price: 48000, rating: 4.9 },
        ],
      },
      {
        name: 'Baa Atoll',
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
        hotels: [
          { name: 'The Leela Kovalam', price: 12000, rating: 4.6 },
          { name: 'Kumarakom Lake Resort', price: 15000, rating: 4.7 },
        ],
      },
      {
        name: 'Delhi',
        hotels: [
          { name: 'Taj Palace, New Delhi', price: 16000, rating: 4.7 },
          { name: 'The Imperial', price: 22000, rating: 4.8 },
        ],
      },
      {
        name: 'Goa',
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
        hotels: [
          { name: 'Address Downtown', price: 24000, rating: 4.7 },
          { name: 'Armani Hotel Dubai', price: 32000, rating: 4.8 },
        ],
      },
      {
        name: 'Dubai Marina',
        hotels: [
          { name: 'Grosvenor House', price: 21000, rating: 4.6 },
          { name: 'JW Marriott Marina', price: 18000, rating: 4.5 },
        ],
      },
      {
        name: 'Palm Jumeirah',
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
        hotels: [
          { name: 'Hanging Gardens of Bali', price: 25000, rating: 4.7 },
          { name: 'Alaya Resort Ubud', price: 9000, rating: 4.6 },
        ],
      },
      {
        name: 'Seminyak',
        hotels: [
          { name: 'W Bali - Seminyak', price: 22000, rating: 4.7 },
          { name: 'The Legian Seminyak', price: 28000, rating: 4.8 },
        ],
      },
      {
        name: 'Uluwatu',
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
        hotels: [
          { name: 'The Plaza', price: 35000, rating: 4.7 },
          { name: 'The Langham, New York', price: 32000, rating: 4.6 },
        ],
      },
      {
        name: 'Brooklyn',
        hotels: [
          { name: 'The William Vale', price: 24000, rating: 4.5 },
          { name: '1 Hotel Brooklyn Bridge', price: 30000, rating: 4.7 },
        ],
      },
      {
        name: 'Queens',
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
        hotels: [
          { name: 'Hotel Artemide', price: 16000, rating: 4.7 },
          { name: 'The First Roma Dolce', price: 19000, rating: 4.6 },
        ],
      },
      {
        name: 'Trastevere',
        hotels: [
          { name: 'VOI Donna Camilla Savelli', price: 14000, rating: 4.5 },
          { name: 'Hotel Santa Maria', price: 12000, rating: 4.4 },
        ],
      },
      {
        name: 'Vatican Area',
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
        hotels: [
          { name: 'Baur au Lac', price: 42000, rating: 4.8 },
          { name: 'Storchen Zürich', price: 36000, rating: 4.7 },
        ],
      },
      {
        name: 'Lucerne',
        hotels: [
          { name: 'Hotel Schweizerhof Luzern', price: 28000, rating: 4.7 },
          { name: 'Radisson Blu Hotel', price: 22000, rating: 4.5 },
        ],
      },
      {
        name: 'Interlaken',
        hotels: [
          { name: 'Victoria-Jungfrau Grand Hotel', price: 45000, rating: 4.8 },
          { name: 'Hotel Interlaken', price: 21000, rating: 4.4 },
        ],
      },
    ],
  },
];