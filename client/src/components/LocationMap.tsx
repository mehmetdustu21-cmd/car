import { useEffect, useRef } from 'react';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  phone: string;
}

export default function LocationMap({
  latitude,
  longitude,
  title,
  address,
  phone,
}: LocationMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current || !window.google) return;

    // Initialize map
    map.current = new window.google.maps.Map(mapContainer.current, {
      zoom: 16,
      center: { lat: latitude, lng: longitude },
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true,
    });

    // Add marker
    const marker = new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map.current,
      title: title,
    });

    // Add info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 12px; font-family: Inter, sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">
            ${title}
          </h3>
          <p style="margin: 0 0 6px 0; font-size: 14px; color: #666;">
            ${address}
          </p>
          <p style="margin: 0; font-size: 14px; color: #0066cc; font-weight: 500;">
            <a href="tel:${phone}" style="color: #0066cc; text-decoration: none;">
              ${phone}
            </a>
          </p>
        </div>
      `,
    });

    marker.addListener('click', () => {
      infoWindow.open(map.current, marker);
    });

    // Open info window by default
    infoWindow.open(map.current, marker);
  }, [latitude, longitude, title, address, phone]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '400px',
        borderRadius: '8px',
        border: '1px solid #e5e5e5',
        overflow: 'hidden',
      }}
    />
  );
}
