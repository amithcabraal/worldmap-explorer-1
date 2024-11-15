import { Feature } from 'geojson';

export interface Country {
  value: string;
  label: string;
  coordinates: [number, number];
  zoom: number;
}

export const countries: Country[] = [
  { value: 'United States', label: 'United States', coordinates: [-98, 39], zoom: 3.5 },
  { value: 'Russia', label: 'Russia', coordinates: [105, 60], zoom: 2.5 },
  { value: 'China', label: 'China', coordinates: [105, 35], zoom: 3 },
  { value: 'Brazil', label: 'Brazil', coordinates: [-55, -10], zoom: 3 },
  { value: 'Australia', label: 'Australia', coordinates: [133, -25], zoom: 3 },
  { value: 'Canada', label: 'Canada', coordinates: [-95, 60], zoom: 3 },
  { value: 'India', label: 'India', coordinates: [78, 21], zoom: 3.5 },
  { value: 'Argentina', label: 'Argentina', coordinates: [-64, -34], zoom: 3.5 },
  { value: 'Japan', label: 'Japan', coordinates: [138, 38], zoom: 4 },
  { value: 'South Africa', label: 'South Africa', coordinates: [24, -29], zoom: 4 },
  { value: 'France', label: 'France', coordinates: [2, 47], zoom: 5 },
  { value: 'Germany', label: 'Germany', coordinates: [10, 51], zoom: 5 },
  { value: 'Italy', label: 'Italy', coordinates: [12, 42], zoom: 5 },
  { value: 'United Kingdom', label: 'United Kingdom', coordinates: [-2, 54], zoom: 5 },
  { value: 'Spain', label: 'Spain', coordinates: [-4, 40], zoom: 5 },
];