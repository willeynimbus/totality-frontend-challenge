"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface Property {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  quantity?: number;
}

function Property() {
  const [isLiked, setIsLiked] = useState(false);
  const [cart, setCart] = useState<Property[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const addToCart = (property: Property) => {
    const existingItem = cart.find((item) => item.id === property.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === property.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...property, quantity: 1 }]);
    }
    updateCartTotal();
  };

  const updateCartTotal = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setCartTotal(total);
  };

  const increaseQuantity = (propertyId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === propertyId
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    setCart(updatedCart);
    updateCartTotal();
  };

  const decreaseQuantity = (propertyId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === propertyId && (item.quantity || 1) > 1
        ? { ...item, quantity: (item.quantity || 1) - 1 }
        : item
    );
    setCart(updatedCart);
    updateCartTotal();
  };

  const removeFromCart = (propertyId: number) => {
    const updatedCart = cart.filter((item) => item.id !== propertyId);
    setCart(updatedCart);
    updateCartTotal();
  };
  const properties: Property[] = [
    {
      id: 1,
      title: "Super House",
      price: 400,
      images: ["/propert1.jpeg", "/property1room1.jpg", "/property1room2.jpg"],
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Delux House",
      price: 500,
      images: ["/propert2.jpg", "/property1room1.jpg", "/property1room2.jpg"],
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Beach House",
      price: 800,
      images: ["/propert3.jpg", "/property1room1.jpg", "/property1room2.jpg"],
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      title: "Tree House",
      price: 300,
      images: ["/propert4.jpg", "/property1room1.jpg", "/property1room2.jpg"],
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      title: "Mansion House",
      price: 400,
      images: ["/propert5.jpg", "/property1room1.jpg", "/property1room2.jpg"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      title: "Small House",
      price: 700,
      images: ["/propert6.jpg", "/property1room1.jpg", "/property1room2.jpg"],
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="bg-slate-100">
      <div>
        <div>
          <h1 className="flex items-center justify-center text-4xl font-bold mt-4 mb-8 ">
            Explore Property
          </h1>
        </div>
        <div className="flex items-center justify-end mr-6">
          <div className="">
            <Select>
              <SelectTrigger className="w-[180px] flex items-center justify-between font-semibold">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent className="">
                <Select>
                  <SelectTrigger className="w-[180px] flex items-center justify-between font-semibold">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <Slider defaultValue={[33]} max={100} step={1} />
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] flex items-center justify-between font-semibold">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Beach</SelectItem>
                    <SelectItem value="2">City</SelectItem>
                    <SelectItem value="3">Village</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] flex items-center justify-between font-semibold">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1Bhk">1 Bedroom</SelectItem>
                    <SelectItem value="2Bhk">2 Bedroom</SelectItem>
                    <SelectItem value="3 Bhk">3 Bedroom</SelectItem>
                  </SelectContent>
                </Select>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 p-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="border-2 border-slate-400 flex flex-col overflow-hidden items-center justify-center"
          >
            <Carousel>
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <CarouselContent className="">
                      <Image
                        src={image}
                        alt={property.title}
                        width={200}
                        height={200}
                        className="w-full h-[200px] object-cover"
                      />
                    </CarouselContent>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100" />
              <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100" />
            </Carousel>
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
              <CardDescription>{property.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <p className="font-semibold text-red-400 text-2xl">
                  ${property.price}
                </p>
                <Link href="/book">
                  <Button>Book Now</Button>
                </Link>
                <Button onClick={toggleLike}>
                  <Heart className={`${isLiked ? "fill-red-400" : ""}`} />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <Button
                className="w-[200px] md:w-[400px]"
                onClick={() => addToCart(property)}
              >
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Property;
