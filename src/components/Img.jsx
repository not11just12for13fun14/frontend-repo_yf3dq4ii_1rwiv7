import { useState } from 'react';

export default function Img({ src, alt, className = '', fallback = 'https://images.unsplash.com/photo-1523419409543-a7c729e5c4ec?w=1200&auto=format&fit=crop&q=60' }){
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImgSrc(fallback)}
      className={className}
    />
  );
}
