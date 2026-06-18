import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map | null) => void;
}

export function MapView({
  className,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapContainer.current) {
      // Google Maps Embed API - Küçükçekmece, İstanbul
      mapContainer.current.innerHTML = `
        <iframe
          width="100%"
          height="100%"
          style="border:0; border-radius: 12px;"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.8287647876563!2d28.741100776343603!3d41.00823097130819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7e0e0e0e0e1%3A0x0!2sOne%20Car%20Care!5e0!3m2!1str!2str!4v1718704800000"
        ></iframe>
      `;
    }
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className={cn("w-full h-[500px] rounded-xl overflow-hidden", className)} 
    />
  );
}
