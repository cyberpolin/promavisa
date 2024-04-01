import OffersItem from "@/components/OffersItem"
import Slider from "@/components/Slider"
import Image from "next/image"
import StickyHeader from "@/components/StickyHeader"
export default function Home() {
  return (
    <div className="page-wraper">
      {/* <!-- HEADER START --> */}
      <header className="site-header header-style-8 mobile-sider-drawer-menu">
        <div className="top-bar site-bg-primary">
          <div className="container">
            <div className="wt-topbar-left">
              <ul className="list-unstyled e-p-bx">
                <li>
                  <i className="fa fa-envelope"></i>support@promavisa.com.mx
                </li>
                <li>
                  <i className="fa fa-phone"></i>(654) 321-7654
                </li>
              </ul>
            </div>
            <div className="wt-topbar-right"></div>
          </div>
        </div>
        {/* <!-- Search Link --> */}
        {/* <!-- Search Form --> */}

        {/* <!-- Search Form --> */}
        <StickyHeader />
      </header>
      {/* <!-- HEADER END --> */}

      {/* <!-- CONTENT --> */}
      <div className="page-content">
        <Slider
          images={[
            "images/main-slider/slider1/slide1.png",
            "images/main-slider/slider1/slide2.png",
            "images/main-slider/slider1/slide1.png",
            "images/main-slider/slider1/slide2.png",
            "images/main-slider/slider1/slide1.png",
            "images/main-slider/slider1/slide2.png",
            "images/main-slider/slider1/slide1.png",
            "images/main-slider/slider1/slide2.png",
          ]}
        />
      </div>
      {/* <!-- CONTENT --> */}
      {/* <!-- SERVICES --> */}

      <div className="section-full bg-white p-t80 p-b40 scale-bg-top scale-bg-bottom">
        <div className="container">
          {/* <!-- IMAGE CAROUSEL START --> */}

          {/* <!-- TITLE START --> */}
          <div className="section-head text-center">
            <h2 className="text-uppercase">Que ofrecemos...</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator style-square">
                <span className="separator-left site-bg-primary"></span>
                <span className="separator-right site-bg-primary"></span>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
          </div>
          {/* <!-- TITLE END --> */}
        </div>

        {/* CAROUSEL IMAGE */}
        <div className="w-full flex flex-row justify-center ">
          <div className="max-w-1149 flex flex-row overflow-hidden ">
            {[
              {
                title: "Madera para construcción",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                imageURI: "/images/temp/360x225/3.png",
              },

              {
                title: "Ebanisteria",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                imageURI: "/images/temp/360x225/2.png",
              },
              {
                title: "Herrajes",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                imageURI: "/images/temp/360x225/1.png",
              },
            ].map(({ title, description, imageURI }, i) => (
              <OffersItem
                key={i}
                title={title}
                description={description}
                imageURI={imageURI}
              />
            ))}
          </div>
        </div>
        {/* CAROUSEL IMAGE */}
      </div>
      {/* <!-- WHY CHOOSE US SECTION START  --> */}
      <div className="section-full bg-gray p-t80 p-b50 bg-no-repeat bg-left-center">
        <div className="container">
          {/* <!-- TITLE START--> */}
          <div className="section-head text-center">
            <h2 className="text-uppercase">Atendemos a...</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator style-square">
                <span className="separator-left site-bg-primary"></span>
                <span className="separator-right site-bg-primary"></span>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
          </div>
          {/* <!-- TITLE END--> */}
          <div className="section-content">
            <div className="row">
              {/* <!-- COLUMNS 1 --> */}
              <div className="col-lg-4 col-md-6 col-sm-6 m-b10 animate_line">
                <div className="wt-icon-box-wraper  p-a30 center bg-white">
                  <div className="icon-lg site-text-primary m-b20">
                    <a href="#" className="icon-cell">
                      <img src="images/icon/engineer.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase">Arquitectos</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesg indtrysum has been the Ipsum dummy of the printing
                      indus .
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- COLUMNS 2 --> */}
              <div className="col-lg-4 col-md-6 col-sm-6 m-b10 animate_line">
                <div className="wt-icon-box-wraper  p-a30 center bg-white">
                  <div className="icon-lg site-text-primary m-b20">
                    <a href="#" className="icon-cell">
                      <img src="images/icon/light-bulb.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content ">
                    <h5 className="wt-tilte text-uppercase">Carpinteros</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesg indtrysum has been the Ipsum dummy of the printing
                      indus .
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- COLUMNS 3 --> */}
              <div className="col-lg-4 col-md-6 col-sm-6 m-b10 animate_line">
                <div className="wt-icon-box-wraper  p-a30 center bg-white">
                  <div className="icon-lg site-text-primary m-b20">
                    <a href="#" className="icon-cell">
                      <img src="images/icon/compass.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase">Gobiernos</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesg indtrysum has been the Ipsum dummy of the printing
                      indus .
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- COLUMNS 4 --> */}
              <div className="col-lg-4 col-md-6 col-sm-6 m-b10 animate_line">
                <div className="wt-icon-box-wraper  p-a30 center bg-white">
                  <div className="icon-lg site-text-primary m-b20">
                    <a href="#" className="icon-cell">
                      <img src="images/icon/helmet.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase">Gobiernos</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesg indtrysum has been the Ipsum dummy of the printing
                      indus .
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- COLUMNS 5 --> */}
              <div className="col-lg-4 col-md-6 col-sm-6 m-b10 animate_line">
                <div className="wt-icon-box-wraper  p-a30 center bg-white">
                  <div className="icon-lg site-text-primary m-b20">
                    <a href="#" className="icon-cell">
                      <img src="images/icon/brickwall.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase">Proyectos</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesg indtrysum has been the Ipsum dummy of the printing
                      indus .
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- COLUMNS 6 --> */}
              <div className="col-lg-4 col-md-6 col-sm-6 m-b10 animate_line">
                <div className="wt-icon-box-wraper  p-a30 center bg-white">
                  <div className="icon-lg site-text-primary m-b20">
                    <a href="#" className="icon-cell">
                      <img src="images/icon/no-entry.png" alt="" />
                    </a>
                  </div>
                  <div className="icon-content">
                    <h5 className="wt-tilte text-uppercase">Carpinteros</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesg indtrysum has been the Ipsum dummy of the printing
                      indus .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- WHY CHOOSE US SECTION END  -->   */}

      {/* <!-- SERVICES --> */}
    </div>
  )
}
