const OffersItem = ({
  title,
  description,
  imageURI,
}: {
  title: string
  description: string
  imageURI: string
}) => {
  return (
    <div className="w-1/3">
      <div className="wt-box">
        <div className="wt-media">
          <a href="#">
            <img src={imageURI} alt={title} />
          </a>
        </div>
        <div className="wt-info p-tb30">
          <h4 className="wt-title m-t0 m-b5">
            <a href="services-detail.html">{title}</a>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default OffersItem
