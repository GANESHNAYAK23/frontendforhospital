import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          If you have any questions or need further information, please don't
          hesitate to contact us using the information below:
        </p>
        <div className="mt-4">
          <p className="text-gray-600">
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
