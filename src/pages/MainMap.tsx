import React from 'react';
import { WorldMap } from '../components/WorldMap';
import { MapControls } from '../components/MapControls';
import { CountrySearch } from '../components/CountrySearch';

export const MainMap: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="w-full h-full relative pt-16 pb-8 px-8">
        <div className="w-full h-full relative bg-black/20 backdrop-blur-lg rounded-lg overflow-hidden">
          <WorldMap />
        </div>
        <MapControls />
        <CountrySearch />
      </div>
    </div>
  );
};