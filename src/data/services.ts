import { BedDouble, Coffee, Martini, Utensils, Car, Tv, Dumbbell, Shirt } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  image: string;
}

// We'll use this map to convert string icon names to actual components
export const iconMap = {
  BedDouble,
  Coffee,
  Martini,
  Utensils,
  Car,
  Tv,
  Dumbbell,
  Shirt
};

export const services: Service[] = [
  {
    id: "1",
    title: "Premium Lodging",
    description: "Experience comfort like never before with our meticulously designed rooms and suites. Each room is equipped with modern amenities to ensure a restful stay.",
    icon: "BedDouble",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "2",
    title: "Gourmet Restaurant",
    description: "Our in-house restaurant offers a delightful culinary experience with a diverse menu featuring local and international cuisine prepared by expert chefs.",
    icon: "Utensils",
    image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3",
    title: "Cocktail Bar",
    description: "Unwind at our stylish cocktail bar offering an extensive selection of handcrafted cocktails, premium spirits, wines, and beers in a relaxed atmosphere.",
    icon: "Martini",
    image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "4",
    title: "Coffee Shop",
    description: "Start your day right with freshly brewed coffee and pastries at our cozy coffee shop, perfect for casual meetings or a quick refreshment.",
    icon: "Coffee",
    image: "https://images.pexels.com/photos/6400/coffee-smartphone-desk-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "5",
    title: "Secure Parking",
    description: "Convenience meets security with our spacious parking facility adjacent to the main building, offering 24/7 surveillance for your vehicle's safety.",
    icon: "Car",
    image:  "/parking-space.jpg"},
  //   image: "https://images.pexels.com/photos/1004205/pexels-photo-1004205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // },
  {
    id: "6",
    title: "Sports Viewing",
    description: "Never miss a game with our dedicated sports viewing area featuring large screens, comfortable seating, and a vibrant atmosphere for all major sporting events.",
    icon: "Tv",
    image: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "7",
    title: "Fitness Center",
    description: "Maintain your fitness routine during your stay with our well-equipped gym featuring modern cardio and strength training equipment.",
    icon: "Dumbbell",
    image: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "8",
    title: "Laundry Service",
    description: "Our professional laundry service ensures your clothes remain fresh and clean throughout your stay, with quick turnaround times.",
    icon: "Shirt",
    image: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];