import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { DynamicImage } from '~/types'

export default function GalleryColumn({
  galleryImage,
}: {
  galleryImage: DynamicImage
}) {
  return (
    <li className="column__item">
      <div className="column__item-img">
        {galleryImage && (
          <Image
            className="post__cover"
            src={urlForImage(galleryImage).url()}
            height={231}
            width={367}
            alt={galleryImage.alt ?? ''}
          />
        )}
      </div>
    </li>
  )
}
