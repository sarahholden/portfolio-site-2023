import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'

// TODO: Multiple imports not working
export default function GalleryColumn({ galleryImage }) {
  return (
    <li className="column__item">
      <div className="column__item-img">
        {galleryImage && (
          <Image
            className="post__cover"
            src={urlForImage(galleryImage).url()}
            height={231}
            width={367}
            alt={galleryImage.alt && (galleryImage.alt as string)}
          />
        )}
      </div>
    </li>
  )
}
