import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Lightbox from './Lightbox';

interface Props {
  images: string[];
}

export default function ProjectGallery({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="group overflow-hidden cursor-pointer aspect-[4/3]"
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
