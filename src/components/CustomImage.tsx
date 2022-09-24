import NextImage from 'next/image'
import { chakra, ImageProps } from '@chakra-ui/react'

interface CustomImageProps extends Omit<ImageProps, 'placeholder'> {
  src: string
  size?: number | string
  width?: number | string
  height?: number | string
  alt: string
  priority?: boolean
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
}

const Image = chakra(NextImage, {
  shouldForwardProp: prop =>
    ['src', 'width', 'height', 'alt', 'priority', 'layout'].includes(prop)
})

export const CustomImage: FCC<CustomImageProps> = ({
  src,
  width,
  height,
  size,
  alt,
  priority,
  layout,
  ...rest
}) => {
  return (
    <Image
      src={src}
      width={size ?? width}
      height={size ?? height}
      alt={alt}
      priority={priority}
      layout={layout}
      {...rest}
    />
  )
}
