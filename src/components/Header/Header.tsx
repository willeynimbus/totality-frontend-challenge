import { House } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="h-[5rem]  flex items-center justify-around shadow-lg sticky">
      <Link href="/" className="flex items-center gap-2">
        <House className="text-indigo-400" />{" "}
        <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent hover:scale-105 hover:transition-transform hover:delay-100">
          Homes
        </div>
      </Link>
      <div className="space-x-2">
        <Link
          href="/"
          className="text-black font-semibold dark:text-white hover:text-emerald-400 hover:scale-105"
        >
          Home
        </Link>
        <Link
          href="/property"
          className="text-black font-semibold hover:text-emerald-400 dark:text-white hover:scale-105"
        >
          Property
        </Link>
        <Link
          href="/contact"
          className="text-black font-semibold hover:text-emerald-400 dark:text-white hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
      <div className="space-x-2">
        <Link href="/sign-in">
          <Button className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 font-semibold">
            Sign In
          </Button>
        </Link>
        <Link href="register">
          <Button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300 font-bold">
            Register
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
