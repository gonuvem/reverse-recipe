import placeholderImage from 'assets/noimage.png'
import type { ImgHTMLAttributes } from 'react'
import React, { useCallback, useState } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

const Image = ({ ...props }: ImageProps) => {
  const [sourceImage, setSourceImage] = useState(props.src ?? placeholderImage)

  const handleLoadError = useCallback(
    () => {
      setSourceImage(placeholderImage)
    },
    [],
  )

  return (
    <img {...props} src={sourceImage} onError={handleLoadError} />
  )
}

export default Image
