import { Mail, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Homes</h2>
          <p className="text-sm mt-2">© 2024 Homes. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1>Enquiry</h1>
          <div className="flex md:flex-row gap-2">
            <Phone /> <span> +91-12345-67890</span>
          </div>
          <div className="flex md:flex-row gap-2">
            <Mail /> <span> homes.rent@xyz.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
