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
      // One Car Care - Fatih, Ayazma Sk. No:7, 34290, 34029 Küçükçekmece/İstanbul
      // Koordinatlar: 41.002672, 28.790432
      mapContainer.current.innerHTML = `
        <iframe
          width="100%"
          height="100%"
          style="border:0; border-radius: 12px;"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.064114403302!2d28.78785707634336!3d41.0020109713093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa37096e70337%3A0x608e0f6f092306f0!2sFatih%2C%20Ayazma%20Sk.%20No%3A7%2C%2034290%20K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1718714800000"
        ></iframe>
      `;
    }
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className={cn("w-full h-[500px] rounded-xl overflow-hidden shadow-inner bg-gray-50", className)} 
    />
  );
}
