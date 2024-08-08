import Image from "next/image";
import React from "react";
import ShimmerButton from "../magicui/shimmer-button";
import Link from "next/link";

const Main = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between overflow-hidden bg-yellow-300 h-auto md:h-[500px] w-full mt-4">
      <div className="md:w-1/2 text-center md:text-left pl-4 pr-4 mb-10 md:mb-0">
        <p className="text-[50px] text-wrap text-start font-semibold text-gray-800">
          Explore our range of properties available for sale or rent.
        </p>
        <p className="text-wrap text-start text-gray-500">
          Discover a seamless and stress-free way to find your perfect rental
          property. Whether you&apos;re looking for a cozy apartment, a spacious
          house, or a luxury condo. Finding your next home is as simple as a
          click. Start your journey today and rent your property now.
        </p>
        <div className="mt-6">
          <Link href="/property" className="">
            <ShimmerButton
              className="font-bold hover:scale-110"
              shimmerSize="0.2em"
            >
              Get Started
            </ShimmerButton>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <Image
          src="/Home.jpg"
          alt="Main"
          width={600}
          height={600}
          className="w-full h-[300px] md:h-full rounded-t-xl hover:scale-110 delay-75 transition md:rounded-l-full"
        />
      </div>
    </section>
  );
};

export default Main;
