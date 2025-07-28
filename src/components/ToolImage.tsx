"use client"

import { useState } from "react";

interface ToolImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ToolImage({ src, alt, className = "" }: ToolImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // SVG placeholder as data URL
  const placeholderSvg = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" fill="#f3f4f6"/>
      <path d="M32 20C25.37 20 20 25.37 20 32C20 38.63 25.37 44 32 44C38.63 44 44 38.63 44 32C44 25.37 38.63 20 32 20ZM32 41C27.03 41 23 36.97 23 32C23 27.03 27.03 23 32 23C36.97 23 41 27.03 41 32C41 36.97 36.97 41 32 41Z" fill="#9ca3af"/>
      <path d="M32 26C28.69 26 26 28.69 26 32C26 35.31 28.69 38 32 38C35.31 38 38 35.31 38 32C38 28.69 35.31 26 32 26Z" fill="#d1d5db"/>
    </svg>
  `)}`;

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(placeholderSvg);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
