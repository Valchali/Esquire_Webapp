interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  bed: string;
  amenities: string[];
  images: string[];
  featured: boolean;
  available: boolean;
}

export const rooms: Room[] = [
  {
    id: "1",
    name: "Deluxe Suite",
    description: "Our premium deluxe suite offers the ultimate luxury experience with stunning views and exceptional amenities.",
    price: 20000,
    capacity: 2,
    size: 500,
    bed: "King Sized Bed",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Mini Bar",
      "Room Service",
      "Laundry",
      "Private Bathroom",
      "Jacuzzi"
    ],
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    featured: true,
    available: true
  },
  {
    id: "2",
    name: "Executive Room",
    description: "Designed for business travelers, our executive room provides a comfortable workspace and relaxing environment.",
    price: 30000,
    capacity: 2,
    size: 400,
    bed: "Queen Sized Bed",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Work Desk",
      "Coffee Maker",
      "Room Service",
      "Laundry",
      "Private Bathroom"
    ],
    images: [
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    featured: true,
    available: true
  },
  {
    id: "3",
    name: "Standard Double",
    description: "A comfortable and affordable option for couples or solo travelers seeking quality accommodation.",
    price: 35000,
    capacity: 2,
    size: 300,
    bed: "Double Bed",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Coffee Maker",
      "Private Bathroom"
    ],
    images: [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    featured: false,
    available: true
  },
  {
    id: "4",
    name: "Family Suite",
    description: "Perfect for families, this spacious suite includes separate sleeping areas and entertainment options for children.",
    price: 40000,
    capacity: 4,
    size: 650,
    bed: "King Sized Bed + Twin Beds",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Multiple Flat Screen TVs",
      "Mini Bar",
      "Room Service",
      "Laundry",
      "Private Bathroom",
      "Kitchenette",
      "Game Console"
    ],
    images: [
      "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    featured: true,
    available: true
  },
  {
    id: "5",
    name: "Premium Twin",
    description: "Ideal for friends or colleagues traveling together, featuring two comfortable single beds and shared amenities.",
    price: 45000,
    capacity: 2,
    size: 350,
    bed: "Two Single Beds",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Coffee Maker",
      "Work Desk",
      "Private Bathroom"
    ],
    images: [
      "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    featured: false,
    available: true
  },
  {
    id: "6",
    name: "Honeymoon Suite",
    description: "Celebrate your special occasion in this romantic suite featuring luxurious amenities and beautiful decor.",
    price: 50000,
    capacity: 2,
    size: 550,
    bed: "King Sized Canopy Bed",
    amenities: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Mini Bar",
      "Room Service",
      "Laundry",
      "Private Bathroom",
      "Jacuzzi",
      "Balcony",
      "Champagne Service"
    ],
    images: [
      "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3754594/pexels-photo-3754594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    featured: true,
    available: false
  }
];

export const getRoomById = (id: string): Room | undefined => {
  return rooms.find(room => room.id === id);
};

export const getFeaturedRooms = (): Room[] => {
  return rooms.filter(room => room.featured && room.available);
};

export const getAvailableRooms = (): Room[] => {
  return rooms.filter(room => room.available);
};