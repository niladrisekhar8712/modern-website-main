import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '../../components/ProductCard';

// Define the type for a product
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/images/cosplays.png' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/images/cosplays.png' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/images/cosplays.png' },
];

export default function CatalogPage() {
  return (
    <div>
      <Head>
        <title>Catalog - My Ecommerce App</title>
        <meta name="description" content="Browse our catalog of products" />
      </Head>

      <Header />

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}