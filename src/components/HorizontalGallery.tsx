import type React from "react"
import { useState } from "react"
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

  const openPopup = (image: Image) => {
    setSelectedImage(image)
  }

  const closePopup = () => {
    setSelectedImage(null)
  }

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className={styles.galleryContainer}>
      <button className={styles.navButtonLeft} onClick={goToPreviousImage}>
        &lt;
      </button>
      <div className={styles.gallery}>
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          onClick={() => openPopup(images[currentIndex])}
          className={styles.galleryImage}
        />
      </div>
      <button className={styles.navButtonRight} onClick={goToNextImage}>
        &gt;
      </button>
      <div className={styles.imageCounter}>
        {currentIndex + 1} / {images.length}
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

