import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const ImageComponent = ({url, className}) => {
  const [imageUrl, setImageUrl] = useState(url);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);

  const handleImageError = () => {
    // En caso de error al cargar la imagen original, actualiza la URL con la imagen por defecto
    setImageUrl('https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png');
    setError(true);
  };

  return (
   
    <img
    src={imageUrl}
    alt="Imagen"
  
    onError={handleImageError}
    className={className}
  />
  );
};

export default ImageComponent;