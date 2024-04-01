import dayjs from "dayjs"

const Footer = () => {
  const year = dayjs().format("YYYY")
  return (
    <footer className="site-footer footer-dark">
      {/* <!-- COLL-TO ACTION START --> */}
      <div
        className="call-to-action-wrap call-to-action-skew site-bg-primary bg-no-repeat"
        style={{
          backgroundImage: "url(images/background/bg-4.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="call-to-action-left p-tb20">
                <h4 className="text-uppercase m-b10">
                  Te ayudamos a encontrar lo que necesitas
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse viverra mauris eget tortor.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="call-to-action-right p-tb30">
                <a
                  href="contact-1.html"
                  className="site-button-secondry  m-r15 text-uppercase font-weight-600"
                >
                  Contactanos hoy <i className="fa fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER BLOCKES START -->   */}
      <div className="footer-top overlay-wraper">
        <div className="overlay-main"></div>
        <div className="container">
          <div className="row">
            {/* <!-- ABOUT COMPANY --> */}
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_about">
                <h4 className="widget-title">Acerca de PROMAVISA</h4>
                <div className="logo-footer clearfix p-b15">
                  <a href="index.html">
                    <img
                      src="images/logotipo.png"
                      width="230"
                      height="67"
                      alt="image"
                    />
                  </a>
                </div>
                <p>
                  Thewebmax ipsum dolor sit amet, interior adipiscing elit, sed
                  diam nonummy nibh is euismod tincidunt ut laoreet dolore agna
                  aliquam erat . wisi enim ad minim veniam, quis tation. sit
                  amet, consec tetuer. ipsum dolor sit amet, consectetuer
                  adipiscing. ipsum dolor sit .
                </p>
              </div>
            </div>
            {/* <!-- RESENT POST --> */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="widget recent-posts-entry-date">
                <h4 className="widget-title">Noticias de interés</h4>
                <div className="widget-post-bx">
                  <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                    <div className="wt-post-date text-center text-uppercase text-white p-t5">
                      <strong>20</strong>
                      <span>Mar</span>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-header">
                        <h6 className="post-title">
                          <a href="blog-single.html">Titulo de la noticía </a>
                        </h6>
                      </div>
                      <div className="wt-post-meta">
                        <ul>
                          <li className="post-author">
                            <i className="fa fa-user"></i>PROMAVISA
                          </li>
                          <li className="post-comment">
                            <i className="fa fa-comments"></i> 28
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                    <div className="wt-post-date text-center text-uppercase text-white p-t5">
                      <strong>30</strong>
                      <span>Mar</span>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-header">
                        <h6 className="post-title">
                          <a href="blog-single.html">Titulo de la noticía </a>
                        </h6>
                      </div>
                      <div className="wt-post-meta">
                        <ul>
                          <li className="post-author">
                            <i className="fa fa-user"></i>PROMAVISA
                          </li>
                          <li className="post-comment">
                            <i className="fa fa-comments"></i> 29
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                    <div className="wt-post-date text-center text-uppercase text-white p-t5">
                      <strong>31</strong>
                      <span>Mar</span>
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-header">
                        <h6 className="post-title">
                          <a href="blog-single.html">Titulo de la noticía </a>
                        </h6>
                      </div>
                      <div className="wt-post-meta">
                        <ul>
                          <li className="post-author">
                            <i className="fa fa-user"></i>PROMAVISA
                          </li>
                          <li className="post-comment">
                            <i className="fa fa-comments"></i> 30
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- NEWSLETTER --> */}
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_newsletter">
                <h4 className="widget-title">Newsletter</h4>
                <div className="newsletter-bx">
                  <form role="search" method="post">
                    <div className="input-group">
                      <input
                        name="news-letter"
                        className="form-control"
                        placeholder="Dejanos tu corre, te enviaremos noticias de interes"
                        type="text"
                      />
                      <span className="input-group-btn">
                        <button type="submit" className="site-button">
                          <i className="fa fa-paper-plane-o"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- SOCIAL LINKS --> */}
              <div className="widget widget_social_inks">
                <h4 className="widget-title">Redes sociales</h4>
                <ul className="social-icons social-square social-darkest">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="fa fa-facebook"
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="fa fa-linkedin"
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="fa fa-rss"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="fa fa-youtube"></a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="fa fa-instagram"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 p-tb20">
              <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix">
                <div className="icon-md site-text-primary">
                  <span className="iconmoon-travel"></span>
                </div>
                <div className="icon-content">
                  <h5 className="wt-tilte text-uppercase m-b0">Dirección</h5>
                  <p>Av. Cesar Sandino #322</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 p-tb20 ">
              <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix ">
                <div className="icon-md site-text-primary">
                  <span className="iconmoon-smartphone-1"></span>
                </div>
                <div className="icon-content">
                  <h5 className="wt-tilte text-uppercase m-b0">Teléfono</h5>
                  <p className="m-b0">+41 555 888 9585</p>
                  <p>+41 555 888 9585</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 p-tb20">
              <div className="wt-icon-box-wraper left  bdr-1 bdr-gray-dark p-tb15 p-lr10 clearfix">
                <div className="icon-md site-text-primary">
                  <span className="iconmoon-email"></span>
                </div>
                <div className="icon-content">
                  <h5 className="wt-tilte text-uppercase m-b0">Email</h5>
                  <p className="m-b0">info@demo.com</p>
                  <p>info@demo1234.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER COPYRIGHT --> */}
      <div className="footer-bottom overlay-wraper">
        <div className="overlay-main"></div>
        <div className="constrot-strip"></div>
        <div className="container p-t30">
          <div className="row">
            <div className="wt-footer-bot-left">
              <span className="copyrights-text">
                {` © ${year} Proveedora de Maderas de Villahermosa. Todos los derechos reservados.`}
              </span>
            </div>
            <div className="wt-footer-bot-right">
              <ul className="copyrights-nav pull-right">
                <li>
                  <a href="javascript:void(0);">Politica de datos personales</a>
                </li>
                <li>
                  <a href="contact-1.html">Contactanos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
