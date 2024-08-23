import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Failed to load products');
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="container  mx-auto px-4 py-6">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-red-500">{error}</p>
        </div>
      ) : posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map(post => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default Home;