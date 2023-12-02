import React from 'react';
import { useImage } from '../context/ImageContext';

export default function ProfileImage() {
  const { imageUrl } = useImage()

  
  return <img className="w-8 h-8 rounded-full" src={imageUrl} alt="" />;
}
