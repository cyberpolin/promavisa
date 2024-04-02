"use client"
import { use, useEffect, useRef, useState } from "react"

const Slider = ({ images }: { images: String[] }) => {
  const carouselWrapper = useRef<HTMLUListElement>(null)

  const totalImages = images.length

  const [carouselWidth, setCarouselWidth] = useState(0)
  const [carouselHeigth, setCarouselHeigth] = useState(0)
  const [position, setPosition] = useState(0)

  const nextStep = () => {
    if (position === totalImages - 1) {
      setPosition(0)
      return
    }
    setPosition(position + 1)
  }
  const prevStep = () => {
    if (position === 0) {
      setPosition(totalImages - 1)
      return
    }
    setPosition(position - 1)
  }

  useEffect(() => {
    // get and set initial value
    if (carouselHeigth === 0) {
      const ratio = window.innerWidth <= 640 ? 1.2 : 2.35
      setCarouselWidth(window.innerWidth)
      setCarouselHeigth(Math.floor(window.innerWidth / ratio))
    }

    window.addEventListener("resize", ({ target }) => {
      //@ts-ignore
      const width = target?.innerWidth || 0

      const ratio = width <= 640 ? 1.2 : 2.35
      setCarouselWidth(width)
      setCarouselHeigth(Math.floor(width / ratio))
    })

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", () =>
        console.log("removed resize event listener")
      )
    }
  }, [])

  return (
    <div
      className="overflow-hidden flex transition-all duration-500 ease-in-out  -mt-16  "
      style={{
        minWidth: carouselWidth,
        minHeight: carouselHeigth,
        maxHeight: carouselHeigth,
        marginLeft: `-${carouselWidth * position}px`,
      }}
    >
      {images.map((image, index) => (
        <div
          className="flex md:m-0 mt-16 flex-row justify-between w-full h-full bg-cover bg-center bg-no-repeat"
          key={index}
          style={{
            minWidth: carouselWidth,
            minHeight: carouselHeigth + 64,
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="md:w-1/12 w-1/3 content-center ">
            <a
              onClick={prevStep}
              className={`m-auto w-10 h-10   bg-black  content-center text-center cursor-pointer block rounded-md text-white hover:!text-gray-500`}
            >
              <i className="fa fa-2x fa-chevron-left mt-1"></i>
            </a>
          </div>
          <div className="md:w-10/12 w-1/3 ">{/* Put content here */}</div>
          <div className="md:w-1/12 w-1/3 content-center">
            <a
              onClick={nextStep}
              className={`m-auto w-10 h-10 bg-black content-center text-center cursor-pointer block rounded-md text-white hover:!text-gray-500`}
            >
              <i className="fa fa-2x fa-chevron-right mt-1"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider
