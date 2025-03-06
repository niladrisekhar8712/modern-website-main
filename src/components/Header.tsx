import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          My Ecommerce App
        </Link>
        <nav>
          <Link href="/catalog">
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;