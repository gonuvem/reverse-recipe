import placeholderImage from 'assets/noimage.png'
import type { ImgHTMLAttributes } from 'react'
import React, { useCallback, useState } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

const Image = ({ ...rest }: ImageProps) => {
  const [sourceImage, setSourceImage] = useState(rest.src ?? placeholderImage)

  const handleLoadError = useCallback(
    () => {
      setSourceImage(placeholderImage)
    },
    [],
  )

  return (
    <img {...rest} src={sourceImage} onError={handleLoadError} />
  )
}

export default Image
