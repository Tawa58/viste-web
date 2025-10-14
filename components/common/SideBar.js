import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import links from "../../data/linkData";

const Sidebar = ({ show, handleClose }) => {
  const [expandedMenus, setExpandedMenus] = useState({});
  const router = useRouter();

  const toggleSubmenu = (linkId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [linkId]: !prev[linkId]
    }));
  };

  // Create mobile-specific navigation structure
  const mobileLinks = links.map(link => {
    if (link.name === 'About') {
      // Make About a direct link without submenu
      return {
        ...link,
        url: '/about',
        submenu: undefined
      };
    }
    if (link.name === 'Academics') {
      // Remove submenu from Academics, make it a direct link or remove it
      return {
        ...link,
        submenu: undefined,
        url: '#' // or remove this link entirely if not needed
      };
    }
    if (link.name === 'Gallery') {
      // Make Gallery a direct link without submenu
      return {
        ...link,
        url: '/gallery',
        submenu: undefined
      };
    }
    return link;
  });

  // Add independent options
  const principalMessageLink = {
    id: 'principal-message',
    url: '/principal-message',
    name: "Principal's Message"
  };

  const holidaysListLink = {
    id: 'holidays-list',
    url: '/holidays-list',
    name: 'Holidays List'
  };

  const noticeLink = {
    id: 'notice',
    url: '/notice',
    name: 'Notice'
  };

  // Insert independent options after About
  const aboutIndex = mobileLinks.findIndex(link => link.name === 'About');
  if (aboutIndex !== -1) {
    mobileLinks.splice(aboutIndex + 1, 0, principalMessageLink, holidaysListLink, noticeLink);
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`mobile-sidebar-backdrop ${show ? 'show' : 'hide'}`}
        onClick={handleClose}
        aria-hidden={!show}
      />

      {/* Sidebar */}
      <div 
        className={`mobile-sidebar ${show ? 'show' : 'hide'}`}
        aria-hidden={show ? 'false' : 'true'}
      >
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Image src="/assets/img/logo/logo.png" alt="Logo" width={50} height={60} />
          </div>
          <button
            className="sidebar-close-btn"
            onClick={handleClose}
            aria-label="Close menu"
            tabIndex={show ? 0 : -1}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Navigation */}
        <div className="sidebar-nav">
          <nav>
            {mobileLinks.map((link) => (
              <div key={link.id} className="nav-item">
                {link.submenu && link.submenu.length > 0 ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(link.id)}
                      className="nav-button"
                    >
                      <span>{link.name}</span>
                      <span className={`nav-arrow ${expandedMenus[link.id] ? 'expanded' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {/* Submenu */}
                    {expandedMenus[link.id] && (
                      <div className="submenu">
                        {link.submenu.map((subItem) => (
                          <Link key={`${link.id}-${subItem.id}`} href={subItem.url} passHref>
                            <a
                              onClick={handleClose}
                              className="submenu-link"
                            >
                              {subItem.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.url} passHref>
                    <a
                      onClick={handleClose}
                      className={`nav-link ${router.pathname === link.url ? 'active' : ''}`}
                    >
                      {link.name}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <p>&copy; 2025 - All rights reserved by Visionary Institute of Science and Technology.</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;