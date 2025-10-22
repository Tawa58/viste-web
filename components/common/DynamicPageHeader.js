import Link from "next/link";
import React, { useState } from "react";
import links from "../../data/linkData";
import useSticky from "../../hooks/useSticky";
import Sidebar from "./SideBar";
import Image from "next/image";

const DynamicPageHeader = () => {
  // handle sidebar show
  const [show, setShow] = useState(false);
  // handle close
  const handleClose = () => setShow(false);
  // handle sidebar show
  const handleShow = () => setShow(true);
  //   sticky
  const { headerSticky } = useSticky();
  // searchValue
  // dispatch
  // router
  // handleSubmit
  return (
    <>
      <header>
        <div className="header__area">
          <div className="header__top header__border d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-8">
                  <div className="header__info">
                    <ul>
                      <li>
                        <a
                          href="https://goo.gl/maps/qzqY2PAcQwUz1BYN9"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            width="12"
                            height="14"
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.9235 4.66671C5.23068 4.66671 4.66709 5.2303 4.66709 5.92383C4.66709 6.61666 5.23068 7.17953 5.9235 7.17953C6.61632 7.17953 7.17991 6.61666 7.17991 5.92383C7.17991 5.2303 6.61632 4.66671 5.9235 4.66671ZM5.92354 8.25642C4.63698 8.25642 3.59021 7.21037 3.59021 5.9238C3.59021 4.63652 4.63698 3.58975 5.92354 3.58975C7.21011 3.58975 8.25688 4.63652 8.25688 5.9238C8.25688 7.21037 7.21011 8.25642 5.92354 8.25642Z"
                              fill="#4B535A"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.92278 1.07695C3.25058 1.07695 1.07663 3.27172 1.07663 5.96834C1.07663 9.39942 5.11437 12.7422 5.92278 12.9202C6.73119 12.7415 10.7689 9.3987 10.7689 5.96834C10.7689 3.27172 8.59499 1.07695 5.92278 1.07695ZM5.92259 14C4.63459 14 -0.000488281 10.0139 -0.000488281 5.96831C-0.000488281 2.67723 2.65664 0 5.92259 0C9.18854 0 11.8457 2.67723 11.8457 5.96831C11.8457 10.0139 7.21059 14 5.92259 14Z"
                              fill="#4B535A"
                            />
                          </svg>
                          nharira way , corner twiza and nharira way Norton 
                          
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4">
                  <div className="header__top-right d-flex justify-content-end align-items-center">
                    <div className="header__btn ml-20">
                      <Link href="/contact">
                        <a className="header-btn">contact us</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              headerSticky ? "header__bottom header__sticky" : "header__bottom"
            }
            id="header-sticky"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo" style={{ paddingLeft: '2px' }}>
                    <Link href="/">
                      <a>
                        <span style={{ display: 'block', maxWidth: '360px', fontSize: '16px', fontWeight: 700, color: '#0d6efd', lineHeight: '1.15', textAlign: 'left', margin: 0, letterSpacing: 'normal', wordSpacing: 'normal', paddingLeft: '8px' }}>
                          Visionary Institute of Science and Technology
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {links.map((link, idx) => {
                          return (
                            <li
                              key={`menu-${link.id ?? idx}`}
                              className={link.submenu ? `has-dropdown` : ""}
                            >
                              <Link href={`${link.url}`}>
                                <a>{link.name}</a>
                              </Link>
                              {link.submenu && (
                                <ul className="submenu">
                                  {link.submenu.map((sub_menu, sIdx) => {
                                    return (
                                      <li key={`submenu-${link.id ?? idx}-${sub_menu.id ?? sIdx}`}>
                                        <Link href={`${sub_menu.url}`}>
                                          <a>{sub_menu.name}</a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                    <div className="header__hamburger ml-50 d-xl-none">
                      <button
                        type="button"
                        onClick={handleShow}
                        className="hamurger-btn"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default DynamicPageHeader;