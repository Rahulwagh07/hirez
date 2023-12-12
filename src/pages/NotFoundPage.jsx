import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">
          Oops! The page you are looking for might be in another castle.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
