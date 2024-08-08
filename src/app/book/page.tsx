"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Book = () => {
  const { toast } = useToast();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Book Now</CardTitle>
          <CardDescription>Book or Rent Your Property Now</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Full Name" required={true} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.homes"
                  required={true}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="number">Mobile</Label>
                <Input
                  id="number"
                  type="number"
                  placeholder="+91-XXXXXXXXXX"
                  required={true}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="property">Property</Label>
                <Select>
                  <SelectTrigger id="Property">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="super">Super House</SelectItem>
                    <SelectItem value="delux">Delux House</SelectItem>
                    <SelectItem value="beach">Beach House</SelectItem>
                    <SelectItem value="tree">Tree House</SelectItem>
                    <SelectItem value="mansion">Mansion House</SelectItem>
                    <SelectItem value="smal">Small House</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button
            onClick={() => {
              toast({
                description: "Congratulations! You Have Booked the Property",
              });
            }}
          >
            Buy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Book;
