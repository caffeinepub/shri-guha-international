import { useState } from 'react';
import { Section } from '@/components/Section';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { publicAsset } from '@/lib/publicAsset';

interface GalleryImage {
  uploadSrc: string;
  fallbackSrc: string;
  alt: string;
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; fallback: string } | null>(null);
  const [imageStates, setImageStates] = useState<Map<string, string>>(new Map());
  const [lightboxImageSrc, setLightboxImageSrc] = useState<string>('');

  // Gallery images with generated fallbacks - facility and workshop photos only (excluding IMG_0552.png screenshot)
  const images: GalleryImage[] = [
    {
      uploadSrc: publicAsset('assets/uploads/31d46ff5-488b-4452-98e3-d86e28745423.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-01.dim_1200x1200.jpg'),
      alt: 'Garment Manufacturing Floor'
    },
    {
      uploadSrc: publicAsset('assets/uploads/83a8041e-d497-48a1-89ba-047e2b3715c6.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-02.dim_1200x1200.jpg'),
      alt: 'Production Facility'
    },
    {
      uploadSrc: publicAsset('assets/uploads/IMG_0541.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-03.dim_1200x1200.jpg'),
      alt: 'Sewing Machines and Equipment'
    },
    {
      uploadSrc: publicAsset('assets/uploads/84a58552-bd66-4ff1-925a-04858424767c.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-04.dim_1200x1200.jpg'),
      alt: 'Manufacturing Workshop'
    },
    {
      uploadSrc: publicAsset('assets/uploads/31d46ff5-488b-4452-98e3-d86e28745423-1.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-05.dim_1200x1200.jpg'),
      alt: 'Garment Production Area'
    },
    {
      uploadSrc: publicAsset('assets/uploads/83a8041e-d497-48a1-89ba-047e2b3715c6-1.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-06.dim_1200x1200.jpg'),
      alt: 'Factory Floor Operations'
    },
    {
      uploadSrc: publicAsset('assets/uploads/IMG_0541-1.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-07.dim_1200x1200.jpg'),
      alt: 'Textile Manufacturing Equipment'
    },
    {
      uploadSrc: publicAsset('assets/uploads/84a58552-bd66-4ff1-925a-04858424767c-1.jpeg'),
      fallbackSrc: publicAsset('assets/generated/sgi-gallery-08.dim_1200x1200.jpg'),
      alt: 'Production Workspace'
    }
  ].filter(img => !img.uploadSrc.includes('IMG_0552.png')); // Explicit safeguard against screenshot

  const getImageSrc = (uploadSrc: string, fallbackSrc: string): string => {
    return imageStates.get(uploadSrc) || uploadSrc;
  };

  const handleImageError = (uploadSrc: string, fallbackSrc: string) => {
    setImageStates(prev => new Map(prev).set(uploadSrc, fallbackSrc));
  };

  const handleImageClick = (uploadSrc: string, fallbackSrc: string) => {
    const currentSrc = imageStates.get(uploadSrc) || uploadSrc;
    setSelectedImage({ src: currentSrc, fallback: fallbackSrc });
    setLightboxImageSrc(currentSrc);
  };

  const handleLightboxImageError = () => {
    if (selectedImage) {
      setLightboxImageSrc(selectedImage.fallback);
    }
  };

  return (
    <Section
      id="gallery"
      title="Our Facility"
      subtitle="Take a look at our state-of-the-art manufacturing facility and production capabilities"
      className="bg-muted/30"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(image.uploadSrc, image.fallbackSrc)}
            className="group relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <img
              src={getImageSrc(image.uploadSrc, image.fallbackSrc)}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={() => handleImageError(image.uploadSrc, image.fallbackSrc)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-sm font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full">
                View Image
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-background/95 backdrop-blur-sm border-2 border-primary">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-background/80 p-2 hover:bg-background transition-colors">
            <X className="h-6 w-6 text-foreground" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
              <img
                src={lightboxImageSrc}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={handleLightboxImageError}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
