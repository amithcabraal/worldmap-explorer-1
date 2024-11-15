import React, { memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { useMapStore } from '../store/mapStore';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const WorldMap: React.FC = memo(() => {
  const { selectedCountry, zoom, center, showUnselected, selectCountryByName } = useMapStore();

  return (
    <div className="w-full h-full" style={{ aspectRatio: '16/9' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150
        }}
      >
        <ZoomableGroup
          zoom={zoom}
          center={center}
          minZoom={1}
          maxZoom={8}
          onMoveEnd={({ coordinates, zoom }) => {
            useMapStore.getState().setCenter(coordinates as [number, number]);
            useMapStore.getState().setZoom(zoom);
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    selectCountryByName(geo.properties.name);
                  }}
                  style={{
                    default: {
                      fill: selectedCountry === geo.properties.name
                        ? '#3b82f6'
                        : showUnselected
                          ? '#2a4365'
                          : '#1a202c',
                      stroke: '#1a202c',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#60a5fa',
                      stroke: '#1a202c',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#3b82f6',
                      stroke: '#1a202c',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
});