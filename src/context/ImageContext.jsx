import { createContext, useContext, useEffect, useState } from 'react';

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const storedImageUrl = localStorage.getItem('imageUrl');
    if(storedImageUrl) {
      setImageUrl(storedImageUrl)
    }
  }, [])

  useEffect(() => {
    if (imageUrl) {
      localStorage.setItem('imageUrl', imageUrl);
    } else {
      localStorage.removeItem('imageUrl')
    }
  }, [imageUrl])
  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
}

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImage must be used within an ImageProvider');
  }
  return context;
};
