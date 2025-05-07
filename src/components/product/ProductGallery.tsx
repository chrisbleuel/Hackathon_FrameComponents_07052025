
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  return (
    <div className={`${isMobile ? 'min-w-full w-full' : 'min-w-60 w-[471px]'} bg-[#F5F8FA] rounded-t-lg`}>
      <div className={`flex w-full items-stretch ${isMobile ? 'p-6' : 'p-6'} bg-[#f5f8fa] rounded-md`}>
        <div className="min-w-60 w-full flex-1 shrink basis-[0%] bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex min-h-4 w-full" />
          <div className="w-full pb-2">
            <div className={`flex flex-col relative ${isMobile ? 'min-h-[250px]' : 'min-h-[317px]'} w-full`}>
              <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="absolute h-full w-full object-cover inset-0" />
            </div>
            <div className={`w-full mt-2 ${isMobile ? 'px-4' : 'px-16'}`}>
              <div className="flex w-full items-stretch gap-[5px]">
                {images.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)} 
                    className={`flex ${idx === currentIndex 
                      ? `${isMobile ? 'w-[60px]' : 'w-[95px]'} bg-[#202327]` 
                      : `${isMobile ? 'w-[120px]' : 'w-[190px]'} bg-[#E6EBF0]`} shrink-0 h-1`} 
                    aria-label={`View image ${idx + 1}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
