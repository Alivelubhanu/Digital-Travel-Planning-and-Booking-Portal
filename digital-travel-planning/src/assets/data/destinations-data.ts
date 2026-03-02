export interface Destination {
  name: string;
  image: string;
  description: string;
  category: string;
  rating: number;   // ⭐ ADD THIS LINE
}

export const DESTINATIONS: Destination[] = [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    description: 'City of love and lights',
    category: 'City',
    rating: 4.8
  },
  {
  name: 'Maldives',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  description: 'Luxury island getaway',
  category: 'Beach',
  rating: 4.9
  },
  {
  name: 'India',
  image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1',
  description: 'Culture and heritage',
  category: 'Culture',
  rating: 4.7
  },
  {
  name: 'Dubai',
  image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
  description: 'Modern desert paradise',
  category: 'City',
  rating: 4.6
  },
  {
  name: 'Bali',
  image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop',
  description: 'Tropical paradise with beautiful temples',
  category: 'Beach',
  rating: 4.8
},
{
  name: 'New York',
  image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop',
  description: 'The city that never sleeps',
  category: 'City',
  rating: 4.7
},
{
  name: 'Rome',
  image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=2070&auto=format&fit=crop',
  description: 'Historic city with ancient architecture',
  category: 'Culture',
  rating: 4.8
},
{
  name: 'Switzerland',
  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  description: 'Snowy mountains and scenic beauty',
  category: 'Nature',
  rating: 4.9
}

];