import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapIcon } from 'lucide-react';

const examples = [
  {
    country: 'United States',
    description: 'Default style example',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
  },
  {
    country: 'Russia',
    description: 'Largest country',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80',
  },
  {
    country: 'Japan',
    description: 'Island nation',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80',
  },
  {
    country: 'Brazil',
    description: 'South America',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80',
  },
  {
    country: 'South Africa',
    description: 'Southern hemisphere',
    image: 'https://images.unsplash.com/photo-1486999619268-6aa12c5d4f4a?auto=format&fit=crop&w=800&q=80',
  },
  {
    country: 'Australia',
    description: 'Oceania',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
  },
];

export const Examples: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Example Maps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {examples.map((example) => (
          <div
            key={example.country}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => {
              navigate(`/?country=${encodeURIComponent(example.country)}`);
            }}
          >
            <img
              src={example.image}
              alt={example.country}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MapIcon className="w-12 h-12 text-white mb-2" />
              <h3 className="text-xl font-bold text-white">{example.country}</h3>
              <p className="text-gray-200">{example.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};