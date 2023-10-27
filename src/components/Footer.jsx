import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Footer Content</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Your Company Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
