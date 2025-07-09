import React, { useEffect, useRef, useState } from 'react';

interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: string;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    info?: string;
  }>;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  center, 
  zoom = 15, 
  height = '400px',
  markers = []
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const initMap = () => {
      if (!mapRef.current) return;

      try {
        // Create map with better error handling
        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry.fill',
              stylers: [{ weight: '2.00' }]
            },
            {
              featureType: 'all',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#9c9c9c' }]
            },
            {
              featureType: 'landscape',
              elementType: 'all',
              stylers: [{ color: '#f2f2f2' }]
            },
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'road',
              elementType: 'all',
              stylers: [{ saturation: -100 }, { lightness: 45 }]
            },
            {
              featureType: 'road',
              elementType: 'geometry.fill',
              stylers: [{ color: '#eeeeee' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'all',
              stylers: [{ visibility: 'simplified' }]
            },
            {
              featureType: 'transit',
              elementType: 'all',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'water',
              elementType: 'all',
              stylers: [{ color: '#46bcec' }, { visibility: 'on' }]
            }
          ]
        });

        mapInstanceRef.current = map;

        // Add markers
        markers.forEach(marker => {
          const mapMarker = new window.google.maps.Marker({
            position: marker.position,
            map,
            title: marker.title,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: '#2563eb',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 3
            }
          });

          if (marker.info) {
            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="padding: 10px; font-family: 'Inter', sans-serif; max-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">${marker.title}</h3>
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">${marker.info}</p>
                </div>
              `
            });

            mapMarker.addListener('click', () => {
              infoWindow.open(map, mapMarker);
            });
          }
        });

        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.error('Error initializing Google Maps:', err);
        setError('Failed to load map');
        setIsLoading(false);
      }
    };

    const checkGoogleMaps = () => {
      if (window.google && window.google.maps && window.google.maps.Map) {
        initMap();
      } else {
        setError('Google Maps failed to load');
        setIsLoading(false);
      }
    };

    // Wait for Google Maps to be available
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Set up a timeout to check for Google Maps
      timeoutId = setTimeout(checkGoogleMaps, 2000);
      
      // Also listen for the Google Maps callback
      const originalCallback = (window as any).initMap;
      (window as any).initMap = () => {
        if (originalCallback) originalCallback();
        initMap();
      };
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [center, zoom, markers]);

  if (error) {
    return (
      <div 
        style={{ height, width: '100%' }}
        className="rounded-xl shadow-lg border border-gray-200 flex items-center justify-center bg-gray-50"
      >
        <div className="text-center p-8">
          <div className="text-gray-400 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">Map temporarily unavailable</p>
          <p className="text-gray-500 text-xs mt-1">Please refresh the page</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div 
        style={{ height, width: '100%' }}
        className="rounded-xl shadow-lg border border-gray-200 flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%' }}
      className="rounded-xl shadow-lg border border-gray-200"
    />
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    google: any;
    initMap?: () => void;
  }
}

export default GoogleMap;