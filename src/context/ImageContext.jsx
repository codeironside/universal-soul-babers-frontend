import { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [imageUrl, setImageUrl] = useState(null);

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
