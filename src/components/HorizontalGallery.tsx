import type React from "react"
import { useState, useRef, useEffect } from "react"
import styles from "../styles/HorizontalGallery.module.css"

interface Image {
  src: string
  alt: string
}

interface HorizontalGalleryProps {
  images: Image[]
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const openPopup = (image: Image) => {
    setSelectedImage(image)
  }

  const closePopup = () => {
    setSelectedImage(null)
  }

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, images.length - 4))
  }

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0))
  }

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.style.transform = `translateX(-${currentIndex * 25}%)`
    }
  }, [currentIndex])

  return (
    <div className={styles.galleryContainer}>
      <button className={styles.navButtonLeft} onClick={goToPreviousImage} disabled={currentIndex === 0}>
        &lt;
      </button>
      <div className={styles.gallery}>
        <div className={styles.galleryInner} ref={galleryRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              onClick={() => openPopup(image)}
              className={styles.galleryImage}
            />
          ))}
        </div>
      </div>
      <button className={styles.navButtonRight} onClick={goToNextImage} disabled={currentIndex >= images.length - 4}>
        &gt;
      </button>
      <div className={styles.imageCounter}>
        {currentIndex + 1}-{Math.min(currentIndex + 4, images.length)} / {images.length}
      </div>
      {selectedImage && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} className={styles.popupImage} />
            <button className={styles.closeButton} onClick={closePopup}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HorizontalGallery

