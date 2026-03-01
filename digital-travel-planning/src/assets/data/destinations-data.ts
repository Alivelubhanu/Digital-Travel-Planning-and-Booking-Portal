export interface Destination {
  name: string;
  image: string;
  description: string;
  category: string;
}

export const DESTINATIONS: Destination[] = [
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    description: 'City of love and lights',
    category: 'City'
  },
  {
  name: 'Maldives',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  description: 'Luxury island getaway',
  category: 'Beach'
  },
  {
    name: 'India',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1',
    description: 'Culture and heritage',
    category: 'Culture'
  },
  {
  name: 'Dubai',
  image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
  description: 'Modern desert paradise',
  category: 'City'
  },
  {
  name: 'Bali',
  image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop',
  description: 'Tropical paradise with beautiful temples',
  category: 'Beach'
},
{
  name: 'New York',
  image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop',
  description: 'The city that never sleeps',
  category: 'City'
},
{
  name: 'Rome',
  image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=2070&auto=format&fit=crop',
  description: 'Historic city with ancient architecture',
  category: 'Culture'
},
{
  name: 'Switzerland',
  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  description: 'Snowy mountains and scenic beauty',
  category: 'Nature'
}

];