
import React from "react";

const InformationSection = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="font-playfair text-2xl mb-4">How Spirit Connection Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="p-4">
          <h4 className="font-medium mb-2">Ask Your Question</h4>
          <p className="text-sm text-gray-600">Share your thoughts and what you'd like to know from your beloved pet.</p>
        </div>
        <div className="p-4">
          <h4 className="font-medium mb-2">We Create the Connection</h4>
          <p className="text-sm text-gray-600">Our system establishes a spiritual connection with your pet across the rainbow bridge.</p>
        </div>
        <div className="p-4">
          <h4 className="font-medium mb-2">Receive Their Message</h4>
          <p className="text-sm text-gray-600">Get a comforting message from your pet to help with healing and closure.</p>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
