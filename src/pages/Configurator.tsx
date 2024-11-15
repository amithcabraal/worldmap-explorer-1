import React from 'react';
import { WorldMap } from '../components/WorldMap';
import { useMapStore } from '../store/mapStore';

export const Configurator: React.FC = () => {
  const { zoom, setZoom, showUnselected, toggleUnselected } = useMapStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex">
      <div className="w-1/3 p-8 bg-black/20 backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Map Configuration</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-white mb-2">Zoom Level</label>
            <input
              type="range"
              min="1"
              max="8"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <span className="text-white">{zoom.toFixed(1)}x</span>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showUnselected}
                onChange={toggleUnselected}
                className="form-checkbox"
              />
              <span className="text-white">Show Unselected Countries</span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-8">
        <div className="w-full h-full bg-black/20 backdrop-blur-lg rounded-lg overflow-hidden">
          <WorldMap />
        </div>
      </div>
    </div>
  );
};