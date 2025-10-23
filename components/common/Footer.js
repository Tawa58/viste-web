/* eslint-disable react/no-unknown-property */
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__black"
          style={{ backgroundColor: "#F8F8F8", color: "#000" }}
        >
          <div
            className="footer__top pt-30 pb-18"
            style={{ backgroundColor: "#F8F8F8", color: "#000" }}
          >
            <div className="container">
              <div className="row footer__widgets">
                {/* Footer Widget 1 */}
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 footer-widget">
                  <div className="footer__widget footer-col-1 mb-50">
                    <div className="footer__logo">
                      <div
                        className="logo"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          minHeight: "70px",
                        }}
                      >
                        <Link href="/" passHref>
                          <a style={{ display: "inline-block", padding: "8px 0" }}>
                            <Image
                              src="/assets/img/logo/logo.png"
                              alt="Your School logo"
                              width={80}
                              height={60}
                              style={{
                                objectFit: "contain",
                                borderRadius: "8px",
                                background: "#fff",
                              }}
                              priority
                            />
                          </a>
                        </Link>
                        <span
                          style={{
                            marginLeft: "18px",
                            fontSize: "1.15rem",
                            color: "#222",
                            fontWeight: 600,
                            verticalAlign: "middle",
                            display: "inline-block",
                          }}
                        >
                          Visionary Institute of Science and Technology Education
                        </span>
                      </div>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__widget-info">
                        {/* Removed duplicate school name below the logo */}
                        {/* This social block is visible on desktop only */}
                        <div className="footer__social">
                          <h4>Follow Us</h4>
                          <ul>
                            <li>
                              <a className="fb">
                                <i className="fa-brands fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a className="tw">
                                <i className="fa-brands fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a className="pin">
                                <i className="fa-brands fa-pinterest-p"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Widget 2 */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 footer-widget">
                  <div className="footer__widget footer-col-2 mb-50">
                    <h3 className="footer__widget-title">Quick Links</h3>
                    <div className="footer__widget-content">
                      <ul>
                        <li>
                          <Link href="/about">
                            <a>About us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>Contact us</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer__bottom"
            style={{ backgroundColor: "#F8F8F8", color: "#000" }}
          >
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="footer__copyright text-center">
                      <p>© 2025 Visionary Institute of Science and Technology Education. All rights reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        a {
          color: #000;
        }
        /* Mobile view adjustments */
        @media only screen and (max-width: 580px) {
          /* Stack the footer widgets in a grid (2 columns) */
          .footer__widgets {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .footer-widget {
            text-align: center;
            padding: 10px;
          }
          /* Reduce top and bottom padding */
          .footer__top {
            padding-top: 13px;
            padding-bottom: 8px;
          }
          .footer__bottom {
            padding-top: 6px;
            padding-bottom: 6px;
          }
          .footer__widget-title {
            font-size: 1.1rem;
            margin-bottom: 10px;
          }
          .footer__widget-info p,
          .footer__widget-content ul li a {
            font-size: 0.9rem;
          }
          /* Hide the social icons inside widget 1 */
          .footer__social {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
