import {useState, type ReactNode} from 'react';
import ThemedImage from '@theme/ThemedImage';

interface ZoomableImageProps {
  alt: string;
  light: string;
  dark: string;
  maxWidth?: string;
}

export default function ZoomableImage({alt, light, dark, maxWidth = '400px'}: ZoomableImageProps): ReactNode {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <ThemedImage
        alt={alt}
        sources={{light, dark}}
        style={{maxWidth, borderRadius: '8px', cursor: 'zoom-in'}}
        onClick={() => setIsZoomed(true)}
      />

      {isZoomed && (
        <div className="screenshot-modal" onClick={() => setIsZoomed(false)}>
          <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="screenshot-modal-close"
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
              aria-label="Close"
            >
              ×
            </button>
            <ThemedImage
              alt={alt}
              sources={{light, dark}}
              className="screenshot-modal-image"
              onClick={() => setIsZoomed(false)}
              style={{cursor: 'zoom-out'}}
            />
          </div>
        </div>
      )}
    </>
  );
}
