import React, { ImgHTMLAttributes, useCallback, useState } from 'react';
import placeholderImage from 'assets/noimage.png';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const Image = ({ ...rest } : ImageProps) => {
  const [sourceImage, setSourceImage] = useState(rest.src || placeholderImage)

  const handleLoadError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setSourceImage(placeholderImage)
  }, [])

  return (
    <img {...rest} src={sourceImage} onError={handleLoadError} />
  )
};

export default Image;